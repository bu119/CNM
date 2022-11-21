from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer

class CustomRegisterSerializer(RegisterSerializer):

    interested_genre = serializers.CharField()


    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['interested_genre'] = self.validated_data.get('interested_genre','')

        return data
