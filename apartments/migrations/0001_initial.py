# Generated by Django 4.2.3 on 2023-09-07 17:38

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
            name='apartment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('country', models.TextField(blank=True, null=True)),
                ('county', models.TextField(blank=True, null=True)),
                ('type', models.TextField(blank=True, null=True)),
                ('size', models.TextField(blank=True, null=True)),
                ('beds', models.TextField(blank=True, null=True)),
                ('baths', models.TextField(blank=True, null=True)),
                ('mortgage_plan', models.TextField(blank=True, null=True)),
                ('cash_price', models.TextField(blank=True, null=True)),
                ('instalment_price', models.TextField(blank=True, null=True)),
                ('realtor', models.TextField(blank=True, null=True)),
                ('amenities1', models.TextField(blank=True, null=True)),
                ('amenities2', models.TextField(blank=True, null=True)),
                ('amenities3', models.TextField(blank=True, null=True)),
                ('amenities4', models.TextField(blank=True, null=True)),
                ('amenities5', models.TextField(blank=True, null=True)),
                ('amenities6', models.TextField(blank=True, null=True)),
                ('amenities7', models.TextField(blank=True, null=True)),
                ('amenities8', models.TextField(blank=True, null=True)),
                ('amenities9', models.TextField(blank=True, null=True)),
                ('amenities10', models.TextField(blank=True, null=True)),
                ('amenities11', models.TextField(blank=True, null=True)),
                ('amenities12', models.TextField(blank=True, null=True)),
                ('amenities13', models.TextField(blank=True, null=True)),
                ('amenities14', models.TextField(blank=True, null=True)),
                ('amenities15', models.TextField(blank=True, null=True)),
                ('specific_location', models.TextField(blank=True, null=True)),
                ('center_latitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('center_longitude', models.DecimalField(decimal_places=6, max_digits=9)),
                ('content', models.TextField(blank=True, null=True)),
                ('video', models.FileField(blank=True, null=True, upload_to='videos/')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image1', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image4', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image5', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image6', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image7', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image8', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image9', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image10', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image11', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image12', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image13', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image14', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image15', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image16', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image17', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image18', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image19', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('image20', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='apartmentLike',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('apartment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apartments.apartment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='apartment',
            name='likes',
            field=models.ManyToManyField(blank=True, related_name='apartment_user', through='apartments.apartmentLike', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='apartment',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='apartment', to=settings.AUTH_USER_MODEL),
        ),
    ]
