from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# permission Decorators
# from rest_framework.decorators import permission_classes
# from rest_framework.permissions import IsAuthenticated

from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Movie, Comment
from .serializers import MovieListSerializer, MovieSerializer, CommentSerializer

import random

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
        movies = Movie.objects.all()
        serializer = MovieListSerializer(movies, many=True)
        genre_recommend_movies = {
            'Action': [],
            'Animation': [],
            'Comedy': [],
            'Romance': [],
            'Fantasy': [],
            'Horror': [],
            'Mystery': [],
            'SF': []
        }
        # 데이터 정제
        for movie in serializer.data:
            for genre in movie['genres']:
                if genre['name'] == 'Science Fiction' and len(genre_recommend_movies['SF']) <= 14:
                    genre_recommend_movies['SF'].append(movie)
                if genre['name'] in genre_recommend_movies.keys() and len(genre_recommend_movies[genre['name']]) <= 14:
                    genre_recommend_movies[genre['name']].append(movie)

        return Response(genre_recommend_movies)

# 언어별 추천
@api_view(['GET'])
def language_recommend(request):
    if request.method == 'GET':
        movies = Movie.objects.all().order_by('-vote_count')
        serializer = MovieListSerializer(movies, many=True)
        language_recommend_movies = {
            'ko': [], #korean
            'zh': [], #chinese
            'ja': [], #japanese
            'fr': [], #french
            'es': [], #spanish
            'en': [], #english
        }
        # 데이터 정제
        for movie in serializer.data:
            if movie['original_language'] in language_recommend_movies.keys() and len(language_recommend_movies[movie['original_language']]) <= 14:
                language_recommend_movies[movie['original_language']].append(movie)

        return Response(language_recommend_movies)

# 상세정보
@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)


# 리뷰
@api_view(['GET'])
def comment_list(request):
    if request.method == 'GET':
        # comments = Comment.objects.all()
        comments = get_list_or_404(Comment)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
def comment_create(request, movie_pk):
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)
    # print(movie.comments.filter(user=user).exists())
    if request.method == "GET":
        comments = movie.comments.all()
        serializer = CommentSerializer(comments, many=True)
        print(serializer)
        return Response(serializer.data)
    elif request.method == "POST":
        if movie.comments.filter(user=user).exists():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer = CommentSerializer(data = request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(movie=movie, user=user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)

# @api_view(['POST'])
# def comment_create(request,movie_pk):
#     movie= get_object_or_404(Movie, pk=movie_pk)
#     if movie.comments.filter(user=request.user).exists():
#         return Response(status=status.HTTP_400_BAD_REQUEST)
#     else:
#         serializer = CommentSerializer(data = request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save(user=request.user, movie=movie)

#             comments = movie.comments.all()
#             serializer = CommentSerializer(comments, many=True)
#             return Response(serializer.data , status=status.HTTP_201_CREATED)
    

@api_view(['GET', 'DELETE', 'PUT'])
def comment_detail(request, comment_pk):
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        if comment.user == request.user:
            comment.delete()
            data = {
                'data' : f'{comment_pk}번 리뷰가 삭제되었습니다.'
            }
            return Response(data, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)