const API_KEY = '627eb53a00b46c56672e5fef2aa41986';
const service = new WeatherApiService(API_KEY);

const DEFAULT_QUERY='Barcelona';

new Vue({
  el: "#widget",
  data: {
    query: DEFAULT_QUERY,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  created: function () { //Método que se llama síncronamente cuando se crea la instancia
      service.findWeather(DEFAULT_QUERY)
      .then(this.setWeatherData) //Promesa
  },
  methods: { // A estos métodos se les bindea automáticamente el this de la instancia (por eso desde ellos podemos acceder tranquilamente a this.query, this.setWeatherData, etc…)
    findWeather: function() {
      service.findWeather(this.query)
        .then(this.setWeatherData)
    },
    setWeatherData: function({ temp, temp_max, temp_min }) {
      this.temp = temp;
      this.temp_max = temp_max;
      this.temp_min = temp_min;
    }
  }
});

Vue.config.devtools = true;
