var config = {};

config.widget = {};
config.widget.news = {};
config.widget.cinema = {};
config.widget.Prado = {};
config.widget.Tyssen = {};
config.widget.weather = {};
config.widget.forecast = {};
config.widget.photo = {};
config.widget.emt = {};
config.web = {};

config.widget.cinema.url = 'http://www.sensacine.com/cines/cine/E0247/';
config.widget.cinema.refreshRateInMinutes = 60;
config.widget.Prado.url = 'https://www.museodelprado.es/actualidad/exposiciones';
config.widget.Prado.refreshRateInMinutes = 3600;
config.widget.Tyssen.url = 'http://www.museothyssen.org/thyssen/exposiciones_proximas';
config.widget.Tyssen.refreshRateInMinutes = 3600;
config.widget.weather.url = 'http://api.openweathermap.org/data/2.5/weather?id=xxxxxxxxxx&units=metric&appid=xxxxxxxxxxxxxxxxxxxxxxxxxx';
config.widget.weather.refreshRateInMinutes = 10;
config.widget.news.url = 'https://www.meneame.net/rss?active';
config.widget.news.refreshRateInMinutes = 60;
config.widget.forecast.url = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=xxxxxx&cnt=5&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
config.widget.forecast.refreshRateInMinutes = 1440;
config.widget.photo.dropboxKey = '';
config.widget.emt.url = 'https://openbus.emtmadrid.es/emt-proxy-server/last/geo/GetArriveStop.php';
config.widget.emt.refreshRateInMinutes = 1;

config.web.port = 3000;
config.web.motionUrl = 'http://localhost:3001/takePhoto?filepath=';

module.exports = config;
