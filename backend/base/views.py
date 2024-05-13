from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from django.http import JsonResponse

# Create y views here.
@api_view(['GET'])
def getproducts(request,pk):
    
    product = None
    for i in products :
        if i['_id']==pk:
            product=i
            break    
    return Response(product)