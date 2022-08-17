from products.models import *
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class SalesmanManager(BaseUserManager):
    def create_user(self,email,name,country,city,phone,password=None):
        if not email:
            raise ValueError ('Users Must Have an email address')

        email =self.normalize_email(email)
        user = self.model(email=email,name=name,country=country,city=city,phone=phone)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, first_name, last_name, email, password=None):
        user = self.create_user(
        first_name,
        last_name,
        email,
        password=password,
        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class Salesman(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255,unique=True,)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    is_active = models.BooleanField(default=True)
    is_manager = models.BooleanField(default=False)

    objects = SalesmanManager()
    
    USERNAME_FIELD ='email'
    REQUIRED_FIELDS = ['name','country','city','phone']

    def get_full_name(self):
        return self.FullName
    def __str__(self):
        return self.email

class Task(models.Model):
    TaskId = models.AutoField(primary_key=True)
    Salesman = models.ForeignKey(Salesman, on_delete=models.CASCADE, blank=True)
    Day = models.CharField(max_length=10)
    Date = models.DateField()
    Details = models.CharField(max_length=999999)

class Area(models.Model):
    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    SalesmanRep = models.ForeignKey(Salesman, on_delete=models.CASCADE, blank=True)

    @property
    def salesman_name(self):
        return self.SalesmanRep.FullName
    def get_name(self):
        return self.Name

class Customer(models.Model):
    Id = models.AutoField(primary_key=True)
    PRE = models.CharField(max_length=50,blank=True)
    Salesman = models.ForeignKey(Salesman, on_delete=models.CASCADE, blank=True)
    Name = models.CharField(max_length=500)
    Rank = models.CharField(max_length=50,blank=True)
    Phone = models.CharField(max_length=50,blank=True)
    Jan = models.CharField(max_length=500,blank=True)
    Feb = models.CharField(max_length=500,blank=True)
    Mar = models.CharField(max_length=500,blank=True)
    Apr = models.CharField(max_length=500,blank=True)
    May = models.CharField(max_length=500,blank=True)
    June = models.CharField(max_length=500,blank=True)
    July = models.CharField(max_length=500,blank=True)
    Aug = models.CharField(max_length=500,blank=True)
    Sep = models.CharField(max_length=500,blank=True)
    Oct = models.CharField(max_length=500,blank=True)
    Nov = models.CharField(max_length=500,blank=True)
    Dec = models.CharField(max_length=500,blank=True)
    Location = models.ForeignKey(Area, on_delete=models.CASCADE, blank=True)
    @property
    def salesman_name(self):
        return self.Salesman.FullName
    @property
    def area_name(self):
        return self.Location.Name

class Report(models.Model):
    Id = models.AutoField(primary_key=True)
    ##  Foreign Keys ###
    Customer = models.ForeignKey(Customer, on_delete=models.CASCADE, blank=True)
    Salesman = models.ForeignKey(Salesman, on_delete=models.CASCADE, blank=True)
    Area = models.ForeignKey(Area, on_delete=models.CASCADE, blank=True)
    MZ_Zircon = models.ForeignKey(MZ_Zircon, on_delete=models.CASCADE, blank=True)
    MZ_Machine = models.ForeignKey(MZ_Machine, on_delete=models.CASCADE, blank=True)
    Furnace_Sintering = models.ForeignKey(Furnace_Sintering, on_delete=models.CASCADE, blank=True)
    Furnace_Poreclains = models.ForeignKey(Furnace_Poreclains, on_delete=models.CASCADE, blank=True)
    Furnace_Press = models.ForeignKey(Furnace_Press, on_delete=models.CASCADE, blank=True)
    Suction = models.ForeignKey(Suction, on_delete=models.CASCADE, blank=True)
    Scanner = models.ForeignKey(Scanner, on_delete=models.CASCADE, blank=True)
    Comp = models.ForeignKey(Composite, on_delete=models.CASCADE, blank=True)
    Powder = models.ForeignKey(Powder, on_delete=models.CASCADE, blank=True)
    Metal = models.ForeignKey(Metal, on_delete=models.CASCADE, blank=True)
    Investment = models.ForeignKey(Investment, on_delete=models.CASCADE, blank=True)

    # Price and grams and other props
    Mz_Price = models.CharField(max_length=999999, blank=True)
    Mz_AvgMonths = models.CharField(max_length=999999, blank=True)
    Scanner_Price = models.CharField(max_length=999999, blank=True)
    Scanner_Labscanner = models.CharField(max_length=999999, blank=True)
    Suction_Price = models.CharField(max_length=999999, blank=True)
    Comp_Price = models.CharField(max_length=999999, blank=True)
    Comp_Gram =models.CharField(max_length=999999, blank=True)
    Powder_Price = models.CharField(max_length=999999, blank=True)
    Powder_Gram = models.CharField(max_length=999999, blank=True)
    Metal_Price = models.CharField(max_length=999999, blank=True)
    Metal_Gram = models.CharField(max_length=999999, blank=True)
    Investment_Price = models.CharField(max_length=999999, blank=True)
    Investment_AvgMonths = models.CharField(max_length=999999, blank=True)
    # Report main attributes
    Date = models.CharField(blank=True, max_length=999999)
    Notes = models.CharField(blank=True, max_length=999999)
    NextAct = models.CharField(blank=True, max_length=9999999)

