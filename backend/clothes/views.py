from django.forms import model_to_dict
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from PIL import Image
from .models import Product
from .serializers import ProductSerializer


# Create your views here.

class ProductAPIView(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

