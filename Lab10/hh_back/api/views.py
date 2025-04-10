from django.shortcuts import render
from rest_framework import generics
from django.http.response import HttpResponse, JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


class CompanyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacanciesListCreateAPIView(generics.ListCreateAPIView): 
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class VacanciesRUDAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer



def get_companies(request): 
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]

    return JsonResponse(companies_json, safe=False)

def get_company(request, pk=None): 
    company = Company.objects.get(id=pk)

    return JsonResponse(company.to_json(), safe=False)

def get_vacancies (request): 
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]

    return JsonResponse(vacancies_json, safe = False)

def get_vacancy(request, pk = None): 
    vacancy = Vacancy.objects.get(id = pk)
    
    return JsonResponse(vacancy.to_json(), safe=False)

def get_vacancy_by_company(request, pk = None): 
    company = Company.objects.get(id=pk)

    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    
    return JsonResponse(vacancies_json, safe=False)

def get_topten(request): 
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_vacancies_json = [top_vacancy.to_json() for top_vacancy in top_vacancies]

    return JsonResponse(top_vacancies_json, safe=False)

# Create your views here.
class CompaniesCRUD(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyCRUD(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            return None

    def get(self, request, pk):
        company = self.get_object(pk)
        if company:
            serializer = CompanySerializer(company)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        company = self.get_object(pk)
        if company:
            serializer = CompanySerializer(company, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        company = self.get_object(pk)
        if company:
            company.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        
        
        

@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def vacancy_company(request, id):
    if request.method == 'GET':
        try:
            # Retrieve all vacancies related to the company with the given id
            vacancies = Vacancy.objects.filter(company_id=id)
            serializer = VacancySerializer(vacancies, many=True)
            return Response(serializer.data)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
# Create your views here.
