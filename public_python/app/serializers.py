from rest_framework import serializers
from app.models import Offers_view, Operators, Cities, Periods, Types, Contacts, Offer_details, Parameters

# offers
class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offers_view
        fields = '__all__'

# operators
class OperatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Operators
        fields = '__all__'

# cities
class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cities
        fields = '__all__'

# periods
class PeriodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Periods
        fields = '__all__'

# Types
class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Types
        fields = '__all__'

# Contacts
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'

# Offer_details
class OfferDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer_details
        fields = '__all__'

# parameters
class ParametersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parameters
        fields = '__all__'

