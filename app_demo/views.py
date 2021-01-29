from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from .models import Tag, Article, News, ImageGallery
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

from .forms import RegistrationForm

# Class Based Views
# Article Read
class ArticleView(DeleteView):
    model = Article
    template_name = 'article/article.html'

# News Read
class NewsView(DetailView):
    model = News
    template_name = 'article/news.html'

# class CategoryView(DetailView):
#     model = Category
#     template_name = 'article/category.html'

# Forms
# Create Article
class CreateArticle(CreateView):
    model = Article
    template_name = 'article/add_article.html'
    fields = '__all__'

class CreateNews(CreateView):
    model = News
    template_name = 'article/add_news.html'
    fields = '__all__'

# Function Based Views
# Landing Page
def Landing(request):
    article = Article.objects.all()
    category = Tag.objects.all()
    news = News.objects.all()
    context = {'article':article, 'category':category, 'news':news}
    return render(request, 'article/index.html', context)

def Magazine(request):
    return render(request, 'article/magazine.html')

def CategoryView(request):
    return render(request, 'article/categories.html')

# Forms
# login form
def loginForm(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.info(request, 'Username or Password is incorrect')
    context = {}
    return render(request, 'accounts/login.html', context)

# register us form
def registerForm(request):
	if request.user.is_authenticated:
		return redirect('home')
	else:
		form = RegistrationForm()
		if request.method == 'POST':
			form = RegistrationForm(request.POST)
			if form.is_valid():
				form.save()
				user = form.cleaned_data.get('username')
				messages.success(request, 'Account was created for ' + user)

				return redirect('login')
			

		context = {'form':form}
		return render(request, 'accounts/register.html', context)

# logout user
def logoutUser(request):
	logout(request)
	return redirect('login')
