# Generated by Django 2.1.7 on 2019-11-26 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0023_auto_20191125_1757'),
    ]

    operations = [
        migrations.CreateModel(
            name='Offers_Cities',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('idCity', models.IntegerField()),
                ('idOffer', models.IntegerField()),
            ],
            options={
                'db_table': 'offers_cities',
            },
        ),
    ]