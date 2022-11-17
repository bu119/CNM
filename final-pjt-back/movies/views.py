from rest_framework.response import Response
from rest_framework.decorators import api_view

# permission Decorators
# from rest_framework.decorators import permission_classes
# from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Movie
from .serializers import MovieListSerializer, MovieSerializer

# Create your views here.
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def recent_popular_movie_list(request):
    if request.method == 'GET':
        recent_movies = Movie.objects.all().order_by('-released_date', '-vote_avg')[:5]
        serializer = MovieListSerializer(recent_movies, many=True)

        return Response(serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)