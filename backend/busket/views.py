from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Busket
from .serializers import BusketSerializer


# Create your views here.
class BusketAPIView(APIView):

    def get(self, request):
        busket_data = Busket.objects.filter(user=request.user)
        serializer = BusketSerializer
        return Response({'busket_data': serializer(busket_data, many=True).data})

