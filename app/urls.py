from django.urls import path
from . import views

urlpatterns = [
    # landing page
    path('', views.LandingPage, name='landing-page'),
    # all articles page
    path('articles/', views.AllArticlesPage, name='articles'),
    # all news page
    path('news/', views.AllNewsPage, name='news'),
    # Aabout page
    path('about/', views.AboutPage, name='about-page'),
    # magazine issue page
    path('magazine/issue', views.MagazineIssueView, name='magazine'),
    # single article page
    path('magazine/article/<slug:slug>/', views.ArticleReadView.as_view(), name='article-read'),
    # view a single news page
    path('news/read/<slug:slug>/', views.NewsReadView.as_view(), name='news-read'), 
    # view a images page
    path('media/images', views.ImageGalleryPage, name='image'),
    # subscriptions checkout page
    path('subscription/checkout', views.CheckoutPage, name='checkout'),
    # view a pricing page
    path('subscription/pricing/', views.PricePage, name='pricing'),
    # view a category articles
    path('tag/read', views.CategoryView, name='category-view'),
    # view all tags
    path('tags/', views.AllTagsPage, name='tags'),
    # view a terms and conditions
    path('terms-and-conditions', views.TermsAndConditionsView, name='terms-conditions'),
    # contact page
    path('contact/', views.ContactPage, name='contact')
]