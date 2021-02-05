from django.views import generic
from django.shortcuts import render
from app.models import Article, News, Tag

# All Views --
# landing page view
def LandingPage(request):
    tags = Tag.objects.all()
    featured_articles = Article.objects.filter(article_feature='featured')
    news = News.objects.all()
    context = {'tags':tags, 'featured_articles':featured_articles, 'news':news}
    return render(request, 'index.html', context)

# about page view
def AboutPage(request):
    return render(request, 'general/about.html')

# view all articles view
def AllArticlesPage(request):
    articles = Article.objects.all()
    context = {'articles':articles}
    return render(request, 'magazine/article_list.html', context)

# view all news
def AllNewsPage(request):
    news = News.objects.all()
    context = {'news':news}
    return render(request, 'magazine/news_list.html', context) 

# view all tags view
def AllTagsPage(request):
    tags = Tag.objects.all()
    context = {'tags':tags}
    return render(request, 'magazine/tags.html', context) 

# contact formview page
def ContactPage(request):
    return render(request, 'forms/contact.html')

# price list view page
def PricePage(request):
    return render(request, 'accounts/pricing.html')

# contact formview page
def CheckoutPage(request):
    return render(request, 'accounts/checkout.html')

# image gallery page view
def ImageGalleryPage(request):
    return render(request, 'media/images.html')

# magazine issue view
def MagazineIssueView(request):
    return render(request, 'magazine/index.html')

# article page view
class ArticleReadView(generic.DetailView):
    model = Article
    template_name = 'magazine/article.html'

# news page view
class NewsReadView(generic.DetailView):
    model = News
    template_name = 'magazine/news.html'

# a view of article/news by category
class TagView(generic.DetailView):
    model = Tag
    template_name = 'magazine/tag-info.html'

# Terms & Conditions Page
def TermsAndConditionsView(request):
    return render(request, 'terms_conditions.html')