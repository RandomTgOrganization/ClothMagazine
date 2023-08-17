from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True)
    bio = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.user