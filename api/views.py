from django.http import HttpResponse, JsonResponse
from rest_framework.views import APIView
from .protocols.output.sensor_pb2 import SensorBatch, SensorReading
from api.models import SensorData

class SensorBatchView(APIView):
    def get(self, request):
        # On récupère tout ou filtre par capteur date…
        queryset = SensorData.objects.all().order_by('timestamp')
        batch = SensorBatch()
        for entry in queryset:
            r = batch.readings.add()
            r.id    = entry.id
            r.timestamp   = int(entry.timestamp.timestamp()*1000)
            r.temperature = entry.temperature
            r.humidity    = entry.humidity
            r.pressure    = entry.pressure
        data = batch.SerializeToString()
        return HttpResponse(data, content_type='application/x-protobuf')


class SensorJsonView(APIView):
    def get(self, request):
        queryset = SensorData.objects.all().order_by('timestamp')

        data = []
        for entry in queryset:
            data.append({
                "id": entry.id,
                "timestamp": int(entry.timestamp.timestamp() * 1000),
                "temperature": entry.temperature,
                "humidity": entry.humidity,
                "pressure": entry.pressure,
            })

        return JsonResponse(data, safe=False)
