from django.shortcuts import render
from app.models import Offers, Operators, Cities, Periods, Types, Contacts, Offer_details, Parameters
from app.serializers import OfferSerializer, OperatorSerializer, CitySerializer, PeriodSerializer, TypeSerializer, ContactSerializer, OfferDetailSerializer, ParametersSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from django.core.mail import EmailMessage



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
        try:
            body = request.body.decode("utf-8")
            email = json.loads(body)["email"]
            comment = json.loads(body)["comment"]
            commentArray = comment.split(' | ')
            emailTo = json.loads(body)["emailTo"]
            offerId = json.loads(body)["offerId"]
            htmlMessage = f'''<h3>Id oferty: {offerId}<h3><h4>Wiadomość: </h4>'''
            for i in commentArray:
                htmlMessage+=f'<p>{i}</p>'
            # normal email
            msg = EmailMessage('COMPARON', htmlMessage, email, [emailTo])
            msg.content_subtype = "html"  # Main content is now text/html
            msg.send()
            # admin email
            msg = EmailMessage('COMPARON ADMIN', htmlMessage, email, ['koszelak.piotr@gmail.com'])
            msg.content_subtype = "html"  # Main content is now text/html
            msg.send()
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        except:
            return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
