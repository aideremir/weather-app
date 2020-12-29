import {CurrentWeatherType} from "@/types/currentWeatherType";

export class WeatherAPI {
    private url = 'http://api.openweathermap.org/data/2.5/weather';
    private apiKey = process.env.VUE_APP_API_KEY;

    public async getCurrentByCoords(lat: number, lon: number): Promise<CurrentWeatherType> {
        const lang = navigator.language || 'ru';
        const url = `${this.url}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=${lang}`;
        let response;

        try {
            response = await fetch(url);
        } catch (error) {
            response = null;
        }

        if (response && response.status === 200) {
            return await response.json() as CurrentWeatherType;
        }

        return null;
    }
}
