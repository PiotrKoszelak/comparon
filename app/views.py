from django.shortcuts import render
from app.models import Offers_view, Operators, Cities, Periods, Types, Contacts, Offer_details
from app.serializers import OfferSerializer, OperatorSerializer, CitySerializer, PeriodSerializer, TypeSerializer, ContactSerializer, OfferDetailSerializer
from rest_framework import generics

# list of offers
class OfferListCreate(generics.ListCreateAPIView):
    serializer_class = OfferSerializer

    def get_queryset(self):
        
        
        queryset = Offers_view.objects.all()
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
class ContactListCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

# Offer detail
class OfferDetailListCreate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Offer_details.objects.all()
    serializer_class = OfferDetailSerializer
