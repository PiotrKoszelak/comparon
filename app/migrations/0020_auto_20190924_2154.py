# Generated by Django 2.1.7 on 2019-09-24 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0019_parameters_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='cities',
            name='value_en',
            field=models.CharField(default='en', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='contacts',
            name='email',
            field=models.CharField(default='en', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='periods',
            name='value_en',
            field=models.CharField(default='en', max_length=30),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='types',
            name='value_en',
            field=models.CharField(default='en', max_length=50),
            preserve_default=False,
        ),
    ]
