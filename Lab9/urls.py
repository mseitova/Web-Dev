from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('companies/', company),
    path('companies/<int:id>/', show_company),
    path('companies/<int:id>/vacancies', show_vacancies_of_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy),
    path('vacancies/top_ten/', top_ten_vacancies)
]