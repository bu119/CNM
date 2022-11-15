from email.policy import default
from django.db import models
from django.conf import settings


class Genre(models.Model):
    name = models.CharField(max_length=50)


class Movie(models.Model):
    poster_path = models.CharField(max_length=200)
    adult = models.BooleanField(default=False)
    overview = models.TextField()
    release_date = models.DateField()
    original_language = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    genres = models.ManyToManyField(Genre)


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review = models.ForeignKey(Movie, on_delete=models.CASCADE)
    content = models.TextField()
