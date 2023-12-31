# Generated by Django 4.1.6 on 2023-06-16 11:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Land',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.TextField(blank=True, null=True)),
                ('county', models.TextField(blank=True, null=True)),
                ('sub_county', models.TextField(blank=True, null=True)),
                ('ward', models.TextField(blank=True, null=True)),
                ('center_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('center_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointA_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointA_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointB_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointB_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointC_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointC_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointD_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointD_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointA1_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('pointA1_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('content', models.TextField(blank=True, null=True)),
                ('video', models.FileField(blank=True, null=True, upload_to='videos/')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image1', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='LandLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('land', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Land.land')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='land',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='land_user', through='Land.LandLike', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='land',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='land', to=settings.AUTH_USER_MODEL),
        ),
    ]
