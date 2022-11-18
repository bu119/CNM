from rest_framework.response import Response
from rest_framework.decorators import api_view

# permission Decorators
# from rest_framework.decorators import permission_classes
# from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Movie
from .serializers import MovieListSerializer, MovieSerializer

# 최신 인기영화 추천
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def recent_popular_movie_list(request):
    if request.method == 'GET':
        recent_popular_movies = Movie.objects.all().order_by('-released_date', '-vote_avg')[:5]
        serializer = MovieListSerializer(recent_popular_movies, many=True)
        return Response(serializer.data)

# 최신 영화 추천
@api_view(['GET'])
def recent_movie_list(request):
    if request.method == 'GET':
        recent_movies = Movie.objects.all().order_by('-released_date')[:20]
        serializer = MovieListSerializer(recent_movies, many=True)
        return Response(serializer.data)

# 스테디셀러
@api_view(['GET'])
def steady_seller_movie_list(request):
    if request.method == 'GET':
        steady_seller_movies = Movie.objects.all().order_by('-vote_count')[:20]
        serializer = MovieListSerializer(steady_seller_movies, many=True)
        return Response(serializer.data)

# 장르별 추천
@api_view(['GET'])
def genre_recommend(request):
    if request.method == 'GET':
        genre_recommend_movies = Movie.objects.all()
        serializer = MovieListSerializer(genre_recommend_movies, many=True)
        return Response(serializer.data)

# 상세정보
@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)