from django.db import models


class Operators(models.Model):
    id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=30)

    class Meta:
        db_table = 'operators'


class Cities(models.Model):
    id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=30)
    value_en = models.CharField(max_length=30)

    class Meta:
        db_table = 'cities'


class Periods(models.Model):
    id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=30)
    value_en = models.CharField(max_length=30)

    class Meta:
        db_table = 'periods'

class Types(models.Model):
    id = models.AutoField(primary_key=True)
    value = models.CharField(max_length=50)
    value_en = models.CharField(max_length=50)

    class Meta:
        db_table = 'types'


class Offers(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.ForeignKey(Cities, on_delete=models.CASCADE)
    operator = models.ForeignKey(Operators, on_delete=models.CASCADE)
    period = models.ForeignKey(Periods, on_delete=models.CASCADE)
    price = models.FloatField()
    speed = models.IntegerField()
    types = models.ForeignKey(Types, on_delete=models.CASCADE)

    class Meta:
        db_table = 'offers'


class Contacts(models.Model):
    id = models.AutoField(primary_key=True)
    operator = models.ForeignKey(Operators, on_delete=models.CASCADE)
    phone = models.CharField(max_length=30)
    email = models.CharField(max_length=30)

    class Meta:
        db_table = 'contacts'

class Offer_details(models.Model):
    id = models.AutoField(primary_key=True)
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE)
    delivery_time = models.IntegerField()
    delivery_cost = models.IntegerField()

    class Meta:
        db_table = 'offer_details'

class Parameters(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    value = models.CharField(max_length=30)
    description = models.CharField(max_length=50)

    class Meta:
        db_table = 'parameters'