from rest_framework import serializers
from .models import Movie, Genre

class GenreSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Genre
        fields = ('name',)


class MovieListSerializer(serializers.ModelSerializer):
    genres = GenreSerializers(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializers(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'