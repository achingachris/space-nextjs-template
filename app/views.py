from django.shortcuts import render

# GLOBAL PAGES

# landing page view
def LandingPage(request):
    return render(request, 'index.html')

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
def ArticleReadView(request):
    return render(request, 'magazine/article.html')

# ----------------------------------------#

# a view of article/news by category
def CategoryView(request):
    return render(request, 'category_list.html')


# news page view
def NewsReadView(request):
    return render(request, 'news.html')





# Terms & Conditions Page
def TermsAndConditionsView(request):
    return render(request, 'terms_conditions.html')