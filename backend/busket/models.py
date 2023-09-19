from django.contrib.auth.models import User
from django.db import models

 # Используется для связи с пользователем, если это необходимо
from clothes.models import Product


class Busket(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    items = models.ManyToManyField('BusketItem')


class BusketItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
