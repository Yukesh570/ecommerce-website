from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from django.http import JsonResponse
from .serializers import *
from .models import *

# Create y views here.
# @api_view(['GET'])
# def getproducts(request,pk):
    
#     product = None
#     for i in products :
#         if i['_id']==pk:
#             product=i
#             break    
#     return Response(product)

@api_view(['GET'])
def getproducts(request):
    products=Product.objects.all()
    serializers=ProductSerializer(products, many=True)
    return Response(serializers.data)
@api_view(['GET'])
def getproduct(request,pk):
    products=Product.objects.get(_id=pk)
    serializers=ProductSerializer(products, many=False)
    return Response(serializers.data)
