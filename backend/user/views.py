from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView)
# Create your views here.











class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    '''
    Кастомный класс чтобы кинуть в токен  боди дату
    в данном случае кидаем емеил каждый раз 
    '''

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email

        return token
    
    
    

class MyTokenObtainPairView(TokenObtainPairView):
    '''После регистрации устанавливаем куки и посылаем в респонс accest token для localstorage'''


    serializer_class = MyTokenObtainPairSerializer
    username_field = 'email' 



    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)


        if response.status_code == 200:
            refresh_token = response.data['refresh']
            response.set_cookie('refreshToken',
                                 refresh_token, 
                                 httponly=True, 
                                 max_age=2592000)

        return response







class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get('refreshToken')

        if not refresh_token:
            return Response({'detail': 'Refresh token not found in cookies.'}, status=status.HTTP_400_BAD_REQUEST)
        
        request.data['refresh'] = refresh_token
        response = super().post(request, *args, **kwargs)

        return response
        