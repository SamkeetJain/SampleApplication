# Generated by Django 4.1.6 on 2023-02-07 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    def add_dummy_data(apps, schema_editor):
        Series = apps.get_model('app', 'Series')
        Series.objects.create(name='Score 1', data=[10, 15, 8, 15, 32])
        Series.objects.create(name='Score 2', data=[8, 12, 16, 10, 2])
        Series.objects.create(name='Score 3', data=[11, 24, 9, 9, 13])

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Series',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('modified_on', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=40)),
                ('data', models.JSONField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RunPython(add_dummy_data),
    ]
