# Generated by Django 2.1.7 on 2020-01-20 05:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0024_offers_cities'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offers',
            name='city',
        ),
        migrations.AddField(
            model_name='offer_details',
            name='equipment',
            field=models.CharField(default='Funbox', max_length=30),
            preserve_default=False,
        ),
    ]