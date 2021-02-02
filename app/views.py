from django.views import generic
from django.shortcuts import render
from app.models import Article, News, Tag

# GLOBAL PAGES

# landing page view
def LandingPage(request):
    tags = Tag.objects.all()
    featured_articles = Article.objects.filter(article_feature='featured')
    news = News.objects.all()
    context = {'tags':tags, 'featured_articles':featured_articles, 'news':news}
    return render(request, 'index.html', context)

def AllArticlesPage(request):
    return render(request, 'article_list.html')

def AllNewsPage(request):
    return render(request, 'news_list.html') 

def AllTagsPage(request):
    tags = Tag.objects.all()
    context = {'tags':tags}
    return render(request, 'tags.html', context) 

# about page view
def AboutPage(request):
    return render(request, 'about.html')

# ----------------------------------------#

# FORMS 

# contact formview page
def ContactPage(request):
    return render(request, 'forms/contact.html')

# ----------------------------------------#

# SUBSCRIPTION 

# price list view page
def PricePage(request):
    return render(request, 'subscription/pricing.html')

# contact formview page
def CheckoutPage(request):
    return render(request, 'subscription/checkout.html')

# ----------------------------------------#

# MEDIA PAGES

# image gallery page view
def ImageGalleryPage(request):
    return render(request, 'media/images.html')

# ----------------------------------------#

# MAGAZINE PAGES & ARTICLES

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
# ----------------------------------------#

# a view of article/news by category
def CategoryView(request):
    return render(request, 'category_list.html')








# Terms & Conditions Page
def TermsAndConditionsView(request):
    return render(request, 'terms_conditions.html')