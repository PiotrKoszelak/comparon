# Generated by Django 2.1.7 on 2019-07-11 19:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_delete_types'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offers',
            name='city',
        ),
        migrations.RemoveField(
            model_name='offers',
            name='period',
        ),
        migrations.RemoveField(
            model_name='offers',
            name='price',
        ),
        migrations.RemoveField(
            model_name='offers',
            name='speed',
        ),
    ]
