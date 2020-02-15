from django.shortcuts import render
from app.models import Offers, Operators, Cities, Periods, Types, Contacts, Offer_details, Parameters, Offers_Cities
from app.serializers import OfferSerializer, OperatorSerializer, CitySerializer, PeriodSerializer, TypeSerializer, ContactSerializer, OfferDetailSerializer, ParametersSerializer, Offers_Cities_Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from django.core.mail import EmailMessage
from .email_templates import getMessageUserPL, getMessageUserEN, getMessageContact, getMessageAdmin
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

with open('C:/Users/Admin/Desktop/comparON/Key/authorization.txt') as f:
    key = f.read().strip()

# list of offers
class OfferListCreate(APIView):
    
    def get(self, request, id, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                Offers_Cities_filtered = Offers_Cities.objects.filter(idCity=id)
                offers = set()
                for e in Offers_Cities_filtered:
                    offers.add(Offers.objects.get(id=e.idOffer))
                serializer = OfferSerializer(offers, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# operators
class OperatorListCreate(APIView):

    def get(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                objects = Operators.objects.all()
                serializer = OperatorSerializer(objects, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# cities
class CityListCreate(APIView):

    def get(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                objects = Cities.objects.all()
                serializer = CitySerializer(objects, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# periods
class PeriodListCreate(APIView):

    def get(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                objects = Periods.objects.all()
                serializer = PeriodSerializer(objects, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# types
class TypeListCreate(APIView):

    def get(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                objects = Types.objects.all()
                serializer = TypeSerializer(objects, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# contacts
class Contact(APIView):

    def get_object(self, pk):
        try:
            return Contacts.objects.get(pk=pk)
        except Contacts.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                obj = self.get_object(pk)
                serializer = ContactSerializer(obj)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# Offer detail
class OfferDetail(APIView):

    def get_object(self, pk):
        try:
            return Offer_details.objects.get(pk=pk)
        except Offer_details.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                obj = self.get_object(pk)
                serializer = OfferDetailSerializer(obj)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# Simple offer
class SimpleOffer(APIView):

    def get_object(self, pk):
        try:
            return Offers.objects.get(pk=pk)
        except Offers.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                obj = self.get_object(pk)
                serializer = OfferSerializer(obj)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# Parameters
class ParametersListCreate(APIView):

    def get(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                objects = Parameters.objects.all()
                serializer = ParametersSerializer(objects, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class SendMessage(APIView):

    def post(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):
                try:
                    body = request.body.decode("utf-8")

                    option = json.loads(body)["option"]
                    userData = json.loads(body)["userData"]
                    emailTo = json.loads(body)["emailTo"]
                    userOffer = json.loads(body)["userOffer"]
                    language = json.loads(body)["language"]

                    comment = ''
                    for i in userData["comment"].split(' | '):
                        comment+=f'<p>{i}</p>'
                    
                    
                    if (option=='offer'):

                        htmlMessageAdmin = getMessageAdmin(userOffer, userData, comment, language)
                        
                        if language == 'pl':
                            htmlMessageUser = getMessageUserPL(userOffer)
                        elif language == 'en':
                            htmlMessageUser = getMessageUserEN(userOffer)

                        
                        # normal email
                        msg = EmailMessage('comparON', htmlMessageAdmin, userData["email"], [emailTo])
                        msg.content_subtype = "html"  # Main content is now text/html
                        msg.send()

                        # admin email
                        msg = EmailMessage('comparON ADMIN', htmlMessageAdmin, userData["email"], ['koszelak.piotr@gmail.com'])
                        msg.content_subtype = "html"  # Main content is now text/html
                        msg.send()
                        
                        # user email
                        msg = EmailMessage('comparON', htmlMessageUser, emailTo, [userData["email"]])
                        msg.content_subtype = "html"  # Main content is now text/html
                        msg.send()
                        
                        

                    elif (option=='contact'):
                        htmlMessage = getMessageContact(comment)
                        # normal email
                        msg = EmailMessage('comparON CONTACT', htmlMessage, userData["email"], ['comparoncompany@gmail.com'])
                        msg.content_subtype = "html"  # Main content is now text/html
                        msg.send()

                    return Response({'success': True}, status=status.HTTP_201_CREATED)
                except:
                    return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

# Sign in
class Login(APIView):

    def post(self, request, format=None):
        if ('HTTP_AUTHORIZATION' in request.META):
            if (key == request.META['HTTP_AUTHORIZATION']):

                # create user
                # user = User.objects.create_user('pk', 'koszelak.piotr@gmail.com', 'pk')

                body = request.body.decode("utf-8")
                username = json.loads(body)["username"]
                password = json.loads(body)["password"]
                user = authenticate(username=username, password=password)
                if user is not None:
                    return Response(status=status.HTTP_201_CREATED)
                else:
                    return Response(status=status.HTTP_401_UNAUTHORIZED)

            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)