# Generated by Django 2.1.7 on 2019-07-11 20:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_cities_operators_periods_types'),
    ]

    operations = [
        migrations.CreateModel(
            name='Offers',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('price', models.FloatField()),
                ('speed', models.IntegerField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Cities')),
                ('operator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Operators')),
                ('period', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Periods')),
                ('types', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Types')),
            ],
            options={
                'db_table': 'offers',
            },
        ),
    ]
