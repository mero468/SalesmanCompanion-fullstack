from rest_framework import generics
from .serializers import *
from .models import *

# Create your views here.
class ScannerList(generics.ListCreateAPIView):
    """
    Retrieve Scanners
    """
    queryset = Scanner.objects.all()
    serializer_class = ScannerSerializer

class ScannerDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Scanner.
    """
    queryset = Scanner.objects.all()
    serializer_class = ScannerSerializer

class CompositeList(generics.ListCreateAPIView):
    """
    Retrieve Composites.
    """
    queryset = Composite.objects.all()
    serializer_class = CompositeSerializer

class CompositeDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Prefix of a Composite.
    """
    queryset = Composite.objects.all()
    serializer_class = CompositeSerializer

class PowderList(generics.ListCreateAPIView):
    """
    Retrieve Powders.
    """
    queryset = Powder.objects.all()
    serializer_class = PowderSerializer

class PowderDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete Powders.
    """
    queryset = Powder.objects.all()
    serializer_class = PowderSerializer

class InvestmentList(generics.ListCreateAPIView):
    """
    Retrieve Investments.
    """
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer

class InvestmentDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete Investment.
    """
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer

class SuctionList(generics.ListCreateAPIView):
    """
    Retrieve Suctions.
    """
    queryset = Suction.objects.all()
    serializer_class = SuctionSerializer

class SuctionDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Suction.
    """
    queryset = Suction.objects.all()
    serializer_class = SuctionSerializer

class MZ_MachineList(generics.ListCreateAPIView):
    """
    Retrieve MZ_Machines.
    """
    queryset = MZ_Machine.objects.all()
    serializer_class = MZ_MachineSerializer

class MZ_MachineDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a MZ_Machine.
    """
    queryset = MZ_Machine.objects.all()
    serializer_class = MZ_MachineSerializer

class MZ_ZirconList(generics.ListCreateAPIView):
    """
    Retrieve MZ_Zircons.
    """
    queryset = MZ_Zircon.objects.all()
    serializer_class = MZ_ZirconSerializer

class MZ_ZirconDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a MZ_Zircon.
    """
    queryset = MZ_Zircon.objects.all()
    serializer_class = MZ_ZirconSerializer

class Furnace_PressList(generics.ListCreateAPIView):
    """
    Retrieve Furnace_Presses.
    """
    queryset = Furnace_Press.objects.all()
    serializer_class = Furnace_PressSerializer

class Furnace_PressDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Furnace_Press.
    """
    queryset = Furnace_Press.objects.all()
    serializer_class = Furnace_PressSerializer

class Furnace_SinteringList(generics.ListCreateAPIView):
    """
    Retrieve Furnace_Sinterings.
    """
    queryset = Furnace_Sintering.objects.all()
    serializer_class = Furnace_SinteringSerializer

class Furnace_SinteringDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Furnace_Sintering.
    """
    queryset = Furnace_Sintering.objects.all()
    serializer_class = Furnace_SinteringSerializer

class Furnace_PoreclainsList(generics.ListCreateAPIView):
    """
    Retrieve Furnace_Poreclains.
    """
    queryset = Furnace_Poreclains.objects.all()
    serializer_class = Furnace_PoreclainsSerializer

class Furnace_PoreclainsDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Furnace_Poreclain.
    """
    queryset = Furnace_Poreclains.objects.all()
    serializer_class = Furnace_PoreclainsSerializer

class MetalList(generics.ListCreateAPIView):
    """
    Retrieve Metals.
    """
    queryset = Metal.objects.all()
    serializer_class = MetalSerializer

class MetalDetails(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve,Update and Delete a Metal.
    """
    queryset = Metal.objects.all()
    serializer_class = MetalSerializer

