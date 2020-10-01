from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import EventMetric

from .serializers import MetricsSerializer

from datetime import date,timedelta
from django.http import JsonResponse


class EventMetricAPI(APIView):
    # API View Class for fetching data from db

    def get(self, request, format=None):
        metric = self.request.query_params.get('metric')
        room = self.request.query_params.get('room')

        startdate = date.today()
        enddate = startdate - timedelta(days=6)
        events = EventMetric.objects.filter(dt__lte=startdate,dt__gte=enddate).order_by('dt').reverse()

        if metric:
            events = events.filter(metric=metric)
        elif room:
            events = events.filter(room=room)

        all_rooms = list(EventMetric.objects.all().values_list('room', flat=True).distinct())
        all_metrics = list(EventMetric.objects.all().values_list('metric', flat=True).distinct())
        

        data = []

        for single_date in (enddate + timedelta(n) for n in range(7)):
            day_events = events.filter(dt=single_date)
            day_data={}
            
            day_data["name"]=single_date.strftime("%d %b")

            for event in day_events:
                if metric:
                    day_data[event.room]=event.count
                elif room:
                    day_data[event.metric]=event.count

            data.append(day_data)

        response_data = {
            "rooms" : all_rooms,
            "metric" : all_metrics,
            "data" : data
        }
        
        return JsonResponse(response_data,safe=False)



    def post(self, request, format=None):
        serializer = MetricsSerializer(data=request.data,many=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
