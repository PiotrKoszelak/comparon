# Generated by Django 2.1.7 on 2019-07-11 20:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20190711_2158'),
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
        migrations.RemoveField(
            model_name='offers',
            name='types',
        ),
        migrations.DeleteModel(
            name='Offers',
        ),
    ]
