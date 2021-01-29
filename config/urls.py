from django.urls import path, include
from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    path('', include('app.urls')),
    path("admin/", admin.site.urls),
    path("app/", include('app_demo.urls')),
]
