from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('products/', get_products),
    path('products/<int:id>/', get_products_byID),
    path('categories/', get_categories),
    path('categories/<int:id>/', get_categories_byID),
    path('categories/<int:id>/products/', get_products_by_category)
]