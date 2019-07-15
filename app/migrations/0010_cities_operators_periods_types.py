# Generated by Django 2.1.7 on 2019-07-11 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('app', '0009_auto_20190711_2205'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cities',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('city', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'cities',
            },
        ),
        migrations.CreateModel(
            name='Operators',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'operators',
            },
        ),
        migrations.CreateModel(
            name='Periods',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('period', models.IntegerField()),
            ],
            options={
                'db_table': 'periods',
            },
        ),
        migrations.CreateModel(
            name='Types',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('types', models.CharField(default='1', max_length=50)),
            ],
            options={
                'db_table': 'types',
            },
        ),
    ]
