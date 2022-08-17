from rest_framework import serializers
from salesmen.models import *
from products.models import *

from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class SalesmanSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = Salesman
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['ID', 'Name', 'SalesmanRep', 'salesman_name']


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'