<template>
  <div class="current-weather">
    <h1 class="current-weather__header">
      {{ data.name }}, {{ data.sys.country }}
    </h1>
    <div class="current-weather__body">
      <div class="current-weather__main">
        <img :src="getIconUrl(data.weather[0])" :alt="data.weather[0].description" />
        <span class="current-weather__accent">
          {{ data.main.temp }}&nbsp;&deg;C
        </span>
      </div>
      <div class="current-weather__table">
        <label>Ощущается как</label>
        <span>{{ data.main.feels_like }}&nbsp;&deg;C</span>

        <label>Атмосферное давление</label>
        <span>{{ data.main.pressure }}&nbsp;hPa</span>

        <label>Влажность</label>
        <span>{{ data.main.humidity }}&nbsp;%</span>

        <label>Ветер</label>
        <span>
          <WindArrow :deg="data.wind.deg" />
          {{ data.wind.speed }}&nbsp;м/с
        </span>

        <label>Видимость</label>
        <span>{{ data.visibility }}&nbsp;м</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {CurrentWeatherType, ShortWeatherType} from "@/types/currentWeatherType";
import WindArrow from "@/components/WindArrow.vue";
export default Vue.extend({
  name: 'CurrentWeather',
  components: { WindArrow },
  props: {
    data: {
      type: Object as PropType<CurrentWeatherType>,
      required: true
    },
  },
  methods: {
    getIconUrl(weather: ShortWeatherType) {
      return `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
    }
  }
});
</script>

<style lang="less">
.current-weather {
  &__header {
    margin-bottom: 16px;
  }

  &__main {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__accent {
    font-size: larger;
    font-weight: bold;
  }

  &__table {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    label {
      opacity: 0.7;
    }
  }
}
</style>
