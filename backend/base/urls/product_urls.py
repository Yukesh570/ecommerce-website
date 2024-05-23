from django.urls import path
from base.views import product_views as views



urlpatterns =[ 

    path('<str:pk>/',views.getproduct,name='getproduct'),
    path('',views.getproducts,name='getproducts'),


]
