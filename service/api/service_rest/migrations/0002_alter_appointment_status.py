# Generated by Django 4.0.3 on 2023-07-27 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='created', max_length=200),
        ),
    ]
