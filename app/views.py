from django.shortcuts import render
from app.models import Offers, Operators, Cities, Periods, Types, Contacts, Offer_details, Parameters
from app.serializers import OfferSerializer, OperatorSerializer, CitySerializer, PeriodSerializer, TypeSerializer, ContactSerializer, OfferDetailSerializer, ParametersSerializer
from rest_framework import generics
from rest_framework.views import APIView
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

# list of offers
class OfferListCreate(generics.ListCreateAPIView):
    serializer_class = OfferSerializer

    def get_queryset(self):
        
        
        queryset = Offers.objects.all()
        '''
        operator = self.request.query_params.get('operator', None)
        if operator is not None:
            queryset = queryset.filter(operator=operator)
        '''
        return queryset

# operators
class OperatorListCreate(generics.ListCreateAPIView):
    queryset = Operators.objects.all()
    serializer_class = OperatorSerializer

# cities
class CityListCreate(generics.ListCreateAPIView):
    queryset = Cities.objects.all()
    serializer_class = CitySerializer

# periods
class PeriodListCreate(generics.ListCreateAPIView):
    queryset = Periods.objects.all()
    serializer_class = PeriodSerializer

# types
class TypeListCreate(generics.ListCreateAPIView):
    queryset = Types.objects.all()
    serializer_class = TypeSerializer

# contacts
class Contact(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

# Offer detail
class OfferDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer_details.objects.all()
    serializer_class = OfferDetailSerializer

# Simple offer
class SimpleOffer(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offers.objects.all()
    serializer_class = OfferSerializer

# Parameters
class ParametersListCreate(generics.ListCreateAPIView):
    queryset = Parameters.objects.all()
    serializer_class = ParametersSerializer


class SendMessage(APIView):

    def post(self, request, format=None):
        print (request)
        try:
            
            send_mail(
                'Subject here',
                'Here is the message.',
                'peter.bejlisz@gmail.com',
                ['koszelak.piotr@gmail.com'],
                fail_silently=False,
            )
            
            
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        except:
            return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
