from django.urls import path
from . import views
from .views import ArticleView, NewsView, CategoryView, CreateArticle, loginForm, registerForm, Magazine, CreateNews

urlpatterns = [
    # home page
    path('', views.Landing, name='home'),
    # article reead
    path('article/<slug:slug>', ArticleView.as_view(), name='article'),
    path('news/<slug:slug>', NewsView.as_view(), name='news'),
    path('category/',views.CategoryView, name='category'),
    path('add-article/', CreateArticle.as_view(), name='add-article'),
    path('add-news/', CreateNews.as_view(), name='add-news'),
    path('magazine/', views.Magazine, name='magazine'),
    path('accounts/register', views.registerForm, name='register'),
    path('accounts/login', views.loginForm, name='login'),
    path('accounts/logout/', views.logoutUser, name="logout"),
]
