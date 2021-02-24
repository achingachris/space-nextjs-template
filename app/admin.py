from django.contrib import admin
from .models import *

# page titles
admin.site.site_header = 'Coast Woman Magazine'
admin.site.site_title = 'Coast Woman'
admin.site.index_title = 'Coast Woman Admin'

# Tags admin
class TagAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Tag, TagAdmin)

# magazine issue admin
class MagazineAdmin(admin.ModelAdmin):
    list_display = ('name', 'issue_date',)
    search_fields = ['name']
    prepopulated_fields = {'slug': ('name',)}
admin.site.register(Magazine, MagazineAdmin)

# News admin
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'author',)
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}
admin.site.register(News, NewsAdmin)

# Article admin
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'magazine', 'author',)
    search_fields = ['title']
    prepopulated_fields = {'slug': ('title',)}
admin.site.register(Article, ArticleAdmin)

# image admin
class ImageAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
admin.site.register(ImageGallery, ImageAdmin)

# small adds admin
class SmallAdAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(smallAdd, SmallAdAdmin)

# small adds admin
class largeAdAdmin(admin.ModelAdmin):
    list_display = ('name',)
admin.site.register(largeAdd, largeAdAdmin)