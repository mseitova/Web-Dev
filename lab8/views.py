from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from api.models import *

# Create your views here.

def get_products(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_products_byID(request, id):
    products = Product.objects.get(id = id)
    products_json = products.to_json()
    return JsonResponse(products_json, safe=False)

def get_categories(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_categories_byID(request, id):
    categories = Category.objects.get(id = id)
    categories_json = categories.to_json()
    return JsonResponse(categories_json, safe=False)

def get_products_by_category(request, id):
    products = Product.objects.filter(category = id)
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)