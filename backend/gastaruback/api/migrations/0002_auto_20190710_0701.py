# Generated by Django 2.2.3 on 2019-07-10 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lancamento',
            name='tipo',
            field=models.CharField(default='', max_length=30),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='lancamento',
            name='categoria',
            field=models.IntegerField(),
        ),
    ]
