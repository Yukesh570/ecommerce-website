from django.urls import path

from . import views

urlpatterns =[ 

    path('product/<str:pk>/',views.getproduct,name='getproduct'),
    path('products/',views.getproducts,name='getproducts')

]
