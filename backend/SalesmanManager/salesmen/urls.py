from django.template.defaulttags import url
from django.urls import path
from . import views

urlpatterns = [
    path('', views.SalesmanList.as_view()),
    path('area', views.AreaList.as_view()),
    path('area-details/<int:pk>', views.AreaDetails.as_view()),
    path('customer', views.CustomerList.as_view()),
    path('customer-details/<int:pk>', views.CustomerDetails.as_view()),
    path('report', views.ReportList.as_view()),
    path('report-details/<int:pk>', views.ReportDetails.as_view()),
]
