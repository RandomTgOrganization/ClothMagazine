from rest_framework import serializers
from .models import Busket


class BusketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Busket
        fields = '__all__'