<template>
  <div class="home">
    <CurrentWeather v-if="!errorMessage && currentWeather" :data="currentWeather" />
    <ErrorMessage v-else-if="errorMessage" :message="errorMessage" />
    <Spinner v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CurrentWeather from '@/components/CurrentWeather.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import Spinner from '@/components/Spinner.vue';
import {WeatherAPI} from "@/utils/weatherAPI";
import {CurrentWeatherType} from "@/types/currentWeatherType";
import {ErrorMessages} from "@/types/errorMessages";

export default Vue.extend({
  name: 'Home',
  components: {
    CurrentWeather,
    ErrorMessage,
    Spinner
  },
  data: () => ({
    currentWeather: null as CurrentWeatherType,
    errorMessage: '' as string
  }),
  mounted() {
    this.getCoords();
  },
  methods: {
    getCoords() {
      if (navigator.geolocation) {
        navigator.geolocation
            .getCurrentPosition(
                this.getWeather,
                () => this.setErrorMessage(ErrorMessages.GEOLOCATION_IS_NOT_ALLOWED)
            )
      } else {
        this.setErrorMessage(ErrorMessages.NO_GEOLOCATION_API)
      }
    },
    async getWeather(position: Position) {
      const weatherAPI = new WeatherAPI();
      this.currentWeather = await weatherAPI.getCurrentByCoords(position.coords.latitude, position.coords.longitude);
      if (this.currentWeather === null) {
        this.setErrorMessage(ErrorMessages.WEATHER_API_ERROR)
      }
    },
    setErrorMessage(msg: string) {
      this.errorMessage = msg;
    }
  }
});
</script>
