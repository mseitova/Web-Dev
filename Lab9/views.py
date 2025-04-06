from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from .models import *

def company(request):
    companies_list = list(Company.objects.values())
    
    return JsonResponse(companies_list, safe=False)

def show_company(request, id):
    companies_list = list(Company.objects.filter(id = id).values())
    
    return JsonResponse(companies_list, safe=False)

def show_vacancies_of_company(request, id):
   ## companies_list = companies.objects.get(id = id)
    
    vacancies_list = list(Vacancy.objects.filter(company =id).values())
    
    return JsonResponse(vacancies_list, safe=False)
    
    
def vacancy_list(request):
    vacancies_list = list(Vacancy.objects.values())
    
    return JsonResponse(vacancies_list, safe=False)


def vacancy(request, id):
    vacancies_list = list(Vacancy.objects.filter(id = id).values())
    
    return JsonResponse(vacancies_list,safe=False)


def top_ten_vacancies(request):
    top_ten_vacancies = list(Vacancy.objects.order_by('-salary')[:10].values())
    
    return JsonResponse(top_ten_vacancies, safe=False)

