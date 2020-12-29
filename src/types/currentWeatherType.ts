export type CurrentWeatherType = {
    weather: ShortWeatherType[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    name: string;
    sys: {
        country: string;
    };
    cod: number;
} | null;

export type ShortWeatherType = {
    id: number;
    main: string;
    description: string;
    icon: string;
};
