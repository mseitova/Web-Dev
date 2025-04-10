from django.urls import path 
from .views import CompaniesCRUD, CompanyCRUD, vacancy_company, vacancy_list, vacancy_detail

urlpatterns = [
    path('companies/', CompaniesCRUD.as_view()),
    path('companies/<int:pk>/', CompanyCRUD.as_view()),
    path('companies/<int:id>/vacancies/', vacancy_company),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:id>/', vacancy_detail),
]