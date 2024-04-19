interface WeatherState {
  id: string;
  lat: number;
  lon: number;
  place: Location;
  weather: WeatherResponse;
  image: Image;
  image_name?: string;
  setLocation: (lat: number, lon: number) => void;
  setPlace: (place: Location) => void;
  setWeather: (id: string, weather: WeatherResponse) => void;
  setImage: (weather: Image) => void;
  setNameImageOptional: (image_name: string) => void;
}
interface WeatherResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Current[];
  daily: Daily[];
}

interface ICurrentWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface IForecastWeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

interface Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  wind_gust?: number;
  pop?: number;
  rain?: Rain;
}
interface Rain {
  "1h": number;
}
interface Weather {
  id: number;
  main: Main;
  description: Description;
  icon: string;
}
enum Description {
  AlgoDeNubes = "algo de nubes",
  LluviaDeGranIntensidad = "lluvia de gran intensidad",
  LluviaLigera = "lluvia ligera",
  LluviaModerada = "lluvia moderada",
  MuyNuboso = "muy nuboso",
  Nubes = "nubes",
  NubesDispersas = "nubes dispersas",
}

enum Main {
  Clouds = "Clouds",
  Rain = "Rain",
}
interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
}
interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
