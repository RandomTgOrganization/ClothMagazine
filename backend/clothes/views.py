from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from PIL import Image
from .models import Product
from .serializers import ProductSerializer


# Create your views here.

class ProductAPIView(APIView):
    def get(self, request):
        clothes = Product.objects.all()
        serializer = ProductSerializer
        return Response({'clothes': serializer(clothes, many=True).data})

