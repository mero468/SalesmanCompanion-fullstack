from rest_framework import serializers
from products.models import *


class ScannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scanner
        fields = '__all__'

class CompositeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Composite
        fields = '__all__'


class PowderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Powder
        fields = '__all__'


class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'


class SuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suction
        fields = '__all__'


class MZ_MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = MZ_Machine
        fields = '__all__'


class MZ_ZirconSerializer(serializers.ModelSerializer):
    class Meta:
        model = MZ_Zircon
        fields = '__all__'

class Furnace_PressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furnace_Press
        fields = '__all__'


class Furnace_SinteringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furnace_Sintering
        fields = '__all__'


class Furnace_PoreclainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furnace_Poreclains
        fields = '__all__'



class MetalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metal
        fields = '__all__'




