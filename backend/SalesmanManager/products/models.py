from django.db import models


class Scanner(models.Model):
    IOR = models.CharField(max_length=5000,primary_key=True)


class Composite(models.Model):
    Type = models.CharField(max_length=500,primary_key=True)


class Powder(models.Model):
    Type = models.CharField(max_length=500,primary_key=True)


class Investment(models.Model):
    Type = models.CharField(max_length=500,primary_key=True)


class Suction(models.Model):
    Type = models.CharField(max_length=500,primary_key=True)


class MZ_Machine(models.Model):
    MachineType = models.CharField(max_length=500,primary_key=True)


class MZ_Zircon(models.Model):
    ZirconType = models.CharField(max_length=500,primary_key=True)

class Furnace_Poreclains(models.Model):
    Poreclain = models.CharField(max_length=500,primary_key=True)


class Furnace_Press(models.Model):
    Press = models.CharField(max_length=500,primary_key=True)


class Furnace_Sintering(models.Model):
    Sintering = models.CharField(max_length=500,primary_key=True)

class Metal(models.Model):
    Type = models.CharField(max_length=500,primary_key=True)
