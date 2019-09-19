# Generated by Django 2.1.7 on 2019-07-13 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20190711_2257'),
    ]

    operations = [
        migrations.CreateModel(
            name='Offers_view',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.FloatField()),
                ('speed', models.IntegerField()),
                ('operator', models.CharField(max_length=30)),
                ('operator_id', models.IntegerField()),
                ('period', models.IntegerField()),
                ('type', models.CharField(max_length=50)),
                ('city', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'v_offers',
                'managed': False,
            },
        ),
    ]