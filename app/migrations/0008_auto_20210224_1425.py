# Generated by Django 3.1.5 on 2021-02-24 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_article'),
    ]

    operations = [
        migrations.CreateModel(
            name='largeAdd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Add Name')),
                ('image', models.ImageField(upload_to='images/')),
                ('link', models.URLField(max_length=150, verbose_name='Preview LInk')),
            ],
        ),
        migrations.CreateModel(
            name='smallAdd',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, verbose_name='Add Name')),
                ('image', models.ImageField(upload_to='images/')),
                ('link', models.URLField(max_length=150, verbose_name='Preview LInk')),
            ],
        ),
        migrations.AlterField(
            model_name='news',
            name='news_feature',
            field=models.CharField(choices=[('main', 'Main'), ('featured', 'Featured')], help_text='News to be featured on home page', max_length=20, verbose_name='Article Feature'),
        ),
    ]
