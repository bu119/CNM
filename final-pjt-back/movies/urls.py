from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('r_popular/', views.recent_popular_movie_list),
    path('<int:movie_pk>/', views.movie_detail),
    path('steady/', views.recent_popular_movie_list),

]