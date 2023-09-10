from rest_framework import serializers
from .validators import RegisterValidator
from rest_framework.exceptions import ValidationError
from django.contrib.auth import get_user_model
from .services.authService import RegisterService
from .models import UserProfile
import base64
from .decodeEncodeUtils import DecodeEncodeUtils



class RegistrationSerializer(serializers.Serializer):

    email = serializers.CharField()
    password = serializers.CharField(write_only=True)
    repeat_password = serializers.CharField(write_only=True)
    username = serializers.CharField(write_only=True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(write_only=True,required=False)





    def validate(self, attrs):
        
        validator = RegisterValidator(attrs)
        validator.run_validate()

        if validator.is_validate:
            return attrs
        
        
        raise ValidationError(validator._errors)
        
    


    def create(self, validated_data):


       user_init = RegisterService(validated_data)
       return user_init.register()