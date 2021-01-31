from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from datetime import datetime, date

# Categories
class Tag(models.Model):
    name = models.CharField('Tag Name', max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField('Tag Description', help_text='describe the tag/category')
    image = models.ImageField('Tag Image')

    class Meta:
        verbose_name = 'Tags'
        verbose_name_plural = verbose_name
    
    def __str__(self):
       return self.name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

class Magazine(models.Model):
    name = models.CharField('Magazine Issue Name', max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    tag_line = models.CharField('Tag line', max_length=190, help_text='Magazine issue tag line')
    cover_image = models.ImageField('Cover Image', upload_to='uploads/')
    description = models.TextField('Magazine Issue Description', help_text='describe main issues covered')
    issue_date = models.CharField('Issue Date', help_text='Example: July - May 2020', unique=True, max_length=100, default='Jan - March 2021')
    date = models.DateField(auto_now=False, auto_now_add=False)
    
    class Meta:
        verbose_name = 'Magazine Issue'
        verbose_name_plural = verbose_name
    
    def __str__(self):
       return self.name

    @property
    def imageURL(self):
        try:
            url = self.cover_image.url
        except:
            url = ''
        return url

class Article(models.Model):
    # tag
    TAGS = (
        ('main', 'Main'),
        ('featured', 'Featured')
    )
    title = models.CharField('Article Title', max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    magazine = models.ForeignKey(Magazine, on_delete=models.SET_NULL, null=True)
    date = models.DateField(auto_now=False, auto_now_add=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')
    image = models.ImageField('Cover Image')
    tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True, related_name='+')
    article_feature = models.CharField('Article Feature', choices=TAGS, max_length=20)
    Description = models.TextField('Article Description', null=False, blank=False, max_length=300, default='brief description')
    body = models.TextField('Article Body', null=False, blank=False)
    subheading1 = models.CharField('Sub Heading (optional)', max_length=100, null=True, blank=True)
    body1 = models.TextField('Article Body (optional)', null=True, blank=True)

    class Meta:
        verbose_name = 'Articles'
        verbose_name_plural = verbose_name

    def __str__(self):
       return self.title + ' ' + 'by' + ' ' + str(self.author)

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

class News(models.Model):
    title = models.CharField('News Title', max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    image = models.ImageField('Image')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')
    Tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True, blank=True, related_name='+')
    Description = models.TextField('Article Description', null=False, blank=False, max_length=300, default='brief description')
    body = models.TextField('News Body')
    date = models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        verbose_name = 'News Updates'
        verbose_name_plural = verbose_name

    def __str__(self):
       return self.title + ' ' + 'by' + ' ' + str(self.author)

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

class ImageGallery(models.Model):
    image = models.ImageField(upload_to='uploads/')
    Tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField('Image Name', max_length=20)
    caption = models.CharField('Image Caption', max_length=10, null=False)
    description = models.TextField('Description', null=False)

    class Meta:
        verbose_name = 'Image Gallery'
        verbose_name_plural = verbose_name

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

