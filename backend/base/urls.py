from django.urls import path

from . import views

urlpatterns =[ 

    path('products/<str:pk>/',views.getproducts,name='getproducts')
]
