from django.template.defaulttags import url
from django.urls import path
from . import views

urlpatterns = [
    path('scanner', views.ScannerList.as_view()),
    path('scanner-details/<str:pk>', views.ScannerDetails.as_view()),
    path('composite', views.CompositeList.as_view()),
    path('composite-details/<str:pk>', views.CompositeDetails.as_view()),
    path('composite', views.CompositeList.as_view()),
    path('composite-details/<str:pk>', views.CompositeDetails.as_view()),
    path('powder', views.PowderList.as_view()),
    path('powder-details/<str:pk>', views.PowderDetails.as_view()),
    path('investment', views.InvestmentList.as_view()),
    path('investment-details/<str:pk>', views.InvestmentDetails.as_view()),
    path('suction', views.SuctionList.as_view()),
    path('suction-details/<str:pk>', views.SuctionDetails.as_view()),
    path('machine', views.MZ_MachineList.as_view()),
    path('machine-details/<str:pk>', views.MZ_MachineDetails.as_view()),
    path('zircon', views.MZ_ZirconList.as_view()),
    path('zircon-details/<str:pk>', views.MZ_ZirconDetails.as_view()),
    path('press', views.Furnace_PressList.as_view()),
    path('press-details/<str:pk>', views.Furnace_PressDetails.as_view()),
    path('sintering', views.Furnace_SinteringList.as_view()),
    path('sintering-details/<str:pk>', views.Furnace_SinteringDetails.as_view()),
    path('poreclain', views.Furnace_PoreclainsList.as_view()),
    path('poreclain-details/<str:pk>', views.Furnace_PoreclainsDetails.as_view()),
    path('metal', views.MetalList.as_view()),
    path('metal-details/<str:pk>', views.MetalDetails.as_view()),
]
