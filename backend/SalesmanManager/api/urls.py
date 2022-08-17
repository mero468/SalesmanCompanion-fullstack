from django.urls import path, include
from salesmen.views import SalesmanDetail

urlpatterns = [
    path('products/', include('products.urls')),
    path('salesmen/', include('salesmen.urls')),
    path('salesmen-details/<int:pk>', SalesmanDetail.as_view()),
]
