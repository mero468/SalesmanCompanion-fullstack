from rest_framework import generics
from salesmen.models import *
from .serializers import *


class SalesmanList(generics.ListCreateAPIView):
    """
    Retrieve and Create Salesmen.
    """
    queryset = Salesman.objects.all()
    serializer_class = SalesmanSerializer

class SalesmanDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Salesman.
    """
    queryset = Salesman.objects.all()
    serializer_class = SalesmanSerializer


class AreaList(generics.ListCreateAPIView):
    """
    Retrieve Areas.
    """
    queryset = Area.objects.all()
    serializer_class = AreaSerializer

class AreaDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Area.
    """
    queryset = Area.objects.all()
    serializer_class = AreaSerializer

class CustomerList(generics.ListCreateAPIView):
    """
    Retrieve and Create Salesmen.
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CustomerDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Salesman.
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ReportList(generics.ListCreateAPIView):
    """
    Retrieve and Create Salesmen.
    """
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Salesman.
    """
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

