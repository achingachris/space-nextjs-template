from typing import cast
from django.contrib import admin
from .models import Article, News, Tag, ImageGallery, Magazine

# page titles
admin.site.site_header = 'Coast Woman'
admin.site.site_title = 'Coast Woman'
admin.site.index_title = 'Coast Woman Admin'



# model admin

# Tags admin
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Tag, TagAdmin)

# Magazine issue admin
class MagazineAdmin(admin.ModelAdmin):
    list_display = ('name', 'issue_date',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Magazine, MagazineAdmin)

# Article admin
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'magazine', 'author',)
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(Article, ArticleAdmin)

# News admin
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'author',)
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}

admin.site.register(News, NewsAdmin)

# News admin
class ImageGalleryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']

admin.site.register(ImageGallery, ImageGalleryAdmin)