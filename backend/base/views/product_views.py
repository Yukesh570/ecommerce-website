from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from ..products import products

from ..serializers import *
from ..models import *
from django.contrib.auth.models import User
from rest_framework import status


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
