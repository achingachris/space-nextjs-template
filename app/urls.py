from django.urls import path
from . import views

urlpatterns = [
    # GLOBAL PAGES
    # landing page
    path('', views.LandingPage, name='landing-page'),

    # ----------------------------------------#
    
    # MAGAZINE & ARTICLES
    # magazine issue page
    path('magazine/issue', views.MagazineIssueView, name='magazine'),
    # single article page
    path('magazine/article/read', views.ArticleReadView, name='article-read'),   

    # ----------------------------------------#

    # MEDIA PAGES
    # view a images page
    path('media/images', views.ImageGalleryPage, name='image'),
    
    # ----------------------------------------#


    # view a category page
    path('tag/read', views.CategoryView, name='category-view'),
   
    # view a single news page
    path('news/read', views.NewsReadView, name='news-read'),
    
    
    # view a pricing page
    path('pricing/', views.PricePage, name='pricing'),
    # view a terms and conditions
    path('terms-and-conditions', views.TermsAndConditionsView, name='terms-conditions'),
    # contact page
    path('contact/', views.ContactPage, name='contact')
]
