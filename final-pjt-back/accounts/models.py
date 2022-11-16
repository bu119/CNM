from django.db import models
from django.contrib.auth.models import AbstractUser
from ..movies.models import Genre

# Create your models here.
class User(AbstractUser):
    password = models.CharField(max_length=128)
    username = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    last_name = models.CharField(max_length=150)
    first_name = models.CharField(max_length=150)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    birth_date = models.DateTimeField()

    followings = models.ManyToManyField('self', symmetrical=False, related_name='followers')
    genres = models.ManyToManyField(Genre)