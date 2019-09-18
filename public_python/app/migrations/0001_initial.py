# Generated by Django 2.1.7 on 2019-07-02 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
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
            name='Offers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.FloatField()),
                ('speed', models.IntegerField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Cities')),
            ],
            options={
                'db_table': 'offers',
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
        migrations.AddField(
            model_name='offers',
            name='operator',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Operators'),
        ),
        migrations.AddField(
            model_name='offers',
            name='period',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Periods'),
        ),
    ]
