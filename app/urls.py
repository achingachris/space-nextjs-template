from django.urls import path
from . import views

urlpatterns = [
    path('', views.LandingPage, name='home'),
    # Aabout page
    path('about/', views.AboutPage, name='about'),
    # tags urls
    path('tags/', views.TagList, name='tags'),
    # path('tags/<str:pk>/', views.TagDetail, name='tag-detail'),
    # images urls
    path('images/', views.ImageList, name='images'),
    # magazine issue urls
    path('magazines/', views.MagazineList, name='magazine'),
    # news
    path('news/', views.AllNewsPage, name='news'),
    path('news/<slug:slug>/', views.NewsReadView.as_view(), name='news-read'),
    # articles
    path('articles/', views.AllArticlesPage, name='articles'),
    path('article/<slug:slug>/', views.ArticleReadView.as_view(), name='article-read'),
    # pricing 
    path('pricing/', views.Pricing, name='pricing')
]
