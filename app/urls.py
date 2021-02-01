from django.urls import path
from . import views

urlpatterns = [
    # LANDING PAGE
    path('', views.LandingPage, name='landing-page'),
    # ALL ARTICLESS
    path('articles/', views.AllArticlesPage, name='articles'),
    # ALL NEWS
    path('news/', views.AllNewsPage, name='news'),

    # ABOUT PAGE
    path('about/', views.AboutPage, name='about-page'),

    # ----------------------------------------#
    
    # MAGAZINE & ARTICLES
    # magazine issue page
    path('magazine/issue', views.MagazineIssueView, name='magazine'),
    # single article page
    path('magazine/article/read/', views.ArticleReadView, name='article-read'),   

    # ----------------------------------------#

    # MEDIA PAGES
    # view a images page
    path('media/images', views.ImageGalleryPage, name='image'),

    # ----------------------------------------#

    # SUBSCRIPTION
    path('subscription/checkout', views.CheckoutPage, name='checkout'),
    # view a pricing page
    path('subscription/pricing/', views.PricePage, name='pricing'),

    # view a category page
    path('tag/read', views.CategoryView, name='category-view'),
    path('tags/', views.AllTagsPage, name='tags'),
   
    # view a single news page
    path('news/read', views.NewsReadView, name='news-read'),
    
    
    
    # view a terms and conditions
    path('terms-and-conditions', views.TermsAndConditionsView, name='terms-conditions'),

    # FORMS
    # contact page
    path('contact/', views.ContactPage, name='contact')
]
