# Generated by Django 4.1.6 on 2023-08-22 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Land', '0002_land_price_land_realtor_land_specific_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='land',
            old_name='ward',
            new_name='name',
        ),
        migrations.AddField(
            model_name='land',
            name='size',
            field=models.TextField(blank=True, null=True),
        ),
    ]
