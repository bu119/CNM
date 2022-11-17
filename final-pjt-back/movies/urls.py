from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('recent_popular/', views.recent_popular_movie_list),
    path('<int:movie_pk>/', views.movie_detail),
    path('recent/', views.recent_movie_list),
    path('steady_seller/', views.steady_seller_movie_list),
]