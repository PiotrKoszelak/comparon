# Generated by Django 2.1.7 on 2019-09-25 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0020_auto_20190924_2154'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cities',
            old_name='value',
            new_name='value_pl',
        ),
        migrations.RenameField(
            model_name='operators',
            old_name='value',
            new_name='value_en',
        ),
        migrations.RenameField(
            model_name='periods',
            old_name='value',
            new_name='value_pl',
        ),
        migrations.RenameField(
            model_name='types',
            old_name='value',
            new_name='value_pl',
        ),
        migrations.AddField(
            model_name='operators',
            name='value_pl',
            field=models.CharField(default='pl', max_length=30),
            preserve_default=False,
        ),
    ]