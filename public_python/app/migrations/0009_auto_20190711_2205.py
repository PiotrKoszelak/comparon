# Generated by Django 2.1.7 on 2019-07-11 20:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_offers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offers',
            name='city',
        ),
        migrations.RemoveField(
            model_name='offers',
            name='operator',
        ),
        migrations.RemoveField(
            model_name='offers',
            name='period',
        ),
        migrations.DeleteModel(
            name='Types',
        ),
        migrations.DeleteModel(
            name='Cities',
        ),
        migrations.DeleteModel(
            name='Offers',
        ),
        migrations.DeleteModel(
            name='Operators',
        ),
        migrations.DeleteModel(
            name='Periods',
        ),
    ]
