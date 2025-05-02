import random, time
from datetime import datetime, timedelta
from django.core.management.base import BaseCommand
from faker import Faker

from api.models import SensorData

fake = Faker()
class Command(BaseCommand):
    def handle(self, *args, **options):
        # Créer 1 000 capteurs
        captors_number = 1000

        for i in range(captors_number):
            # Génère 1 000 lectures sur la dernière heure
            for j in range(1000):
                ts = datetime.now() - timedelta(seconds=(3600 - j*3.6))
                SensorData.objects.create(
                    timestamp=ts,
                    temperature=round(random.uniform(15.0, 35.0), 2),
                    humidity=round(random.uniform(15.0, 35.0), 2),
                    pressure=round(random.uniform(15.0, 35.0), 2),
                )

        self.stdout.write(self.style.SUCCESS('Successfully created sensor data'))
