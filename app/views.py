from django.shortcuts import render
from django.views import generic
from .models import *

# Create your views here.
# landing page view
def LandingPage(request):
    tags = Tag.objects.all()[:5]
    featured_articles = Article.objects.filter(article_feature='featured')
    news = News.objects.filter(news_feature='featured')
    context = {'tags':tags, 'featured_articles':featured_articles, 'news':news}
    return render(request, 'index.html', context)

# about page view
def AboutPage(request):
    return render(request, 'about.html')

# view all Tags
def TagList(request):
    tags = Tag.objects.all()
    context = {'tags':tags}
    return render(request, 'tags/list.html', context)

# view tag
# def TagDetail(request, pk):
#     tags = Tag.objects.get(id=pk)
#     return render(request, 'tags/details.html')

# view all magazine issue
def MagazineList(request):
    magazines = Magazine.objects.all()
    context = {'magazines':magazines}
    return render(request, 'magazine/list.html', context)

# view all news
def AllNewsPage(request):
    tags = Tag.objects.all()[:5]
    news = News.objects.all()
    context = {'news':news, 'tags':tags}
    return render(request, 'news/list.html', context)

# news page view
class NewsReadView(generic.DetailView):
    model = News
    template_name = 'news/read.html'

# view all articles view
def AllArticlesPage(request):
    tags = Tag.objects.all()[:5]
    articles = Article.objects.all()
    context = {'articles':articles, 'tags':tags}
    return render(request, 'articles/list.html', context)

# article page view
class ArticleReadView(generic.DetailView):
    model = Article
    template_name = 'articles/read.html'

# view all images
def ImageList(request):
    images = ImageGallery.objects.all()
    context = {'images':images}
    return render(request, 'gallery/list.html', context)

# price list view page
def Pricing(request):
    return render(request, 'accounts/pricing.html')