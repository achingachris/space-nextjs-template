# Generated by Django 3.1.5 on 2021-02-12 20:44

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_tag_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Tag Description'),
        ),
        migrations.CreateModel(
            name='ImageGallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Image Name')),
                ('caption', models.CharField(max_length=100, verbose_name='Image Caption')),
                ('image', models.ImageField(upload_to='images/')),
                ('Tag', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.tag')),
            ],
            options={
                'verbose_name': 'Image Gallery',
                'verbose_name_plural': 'Image Gallery',
            },
        ),
    ]
