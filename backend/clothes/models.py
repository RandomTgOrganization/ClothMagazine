from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='children')

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True,
                                 limit_choices_to={'parent__isnull': True})
    subcategory = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='subcat',
                                    limit_choices_to={'parent__isnull': False})
    image = models.ImageField(upload_to='product_images/')
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    compound = models.TextField(default="Неизвестно")
    color = models.CharField(max_length=50, default="Неизвестно")
    country = models.CharField(max_length=40, default="Неизвестно")
    is_published = models.BooleanField(default=True, verbose_name='Опубликовано')

    def __str__(self):
        return self.name




