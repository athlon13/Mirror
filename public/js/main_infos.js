$(document).ready(function() {
    //server = new WebSocket("ws://localhost:7777/");
    //server.onmessage = function (event) {
    //console.log(event.data);
    
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startDateTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        $("#time").html(h + ":" + m);

		var date = new Date(),
		months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		days = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
		$("#date").html(days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()]);

		t = setTimeout(function () {
                      startDateTime()
                }, 1000);
    }
    startDateTime();
	
	function updateWeather() {
		var weather_icons = {
			'01d':'wi-day-sunny',
			'02d':'wi-day-cloudy',
			'03d':'wi-cloudy',
			'04d':'wi-cloudy-windy',
			'09d':'wi-showers',
			'10d':'wi-rain',
			'11d':'wi-thunderstorm',
			'13d':'wi-snow',
			'50d':'wi-fog',
			'01n':'wi-night-clear',
			'02n':'wi-night-cloudy',
			'03n':'wi-night-cloudy',
			'04n':'wi-night-cloudy',
			'09n':'wi-night-showers',
			'10n':'wi-night-rain',
			'11n':'wi-night-thunderstorm',
			'13n':'wi-night-snow',
			'50n':'wi-night-alt-cloudy-windy'
		}
		
		$.getJSON("weather", function (weather) {
			$("#weatherContainer #temperature").html(weather[1]['ctemp'] + '<sup id="metric">°</sup>');
			$("#weatherContainer #iconStatus").removeClass().addClass('wi').addClass(weather_icons[weather[1]['icono']]);
                        $("#weatherContainer #pression").html(weather[1]['cpres'] + "mmb");
                        $("#weatherContainer #humidity").html(weather[1]['chumd'] + "%");
                        var bar = JSON.parse(JSON.stringify(weather[0]));
                         
                        $("#Dia1").html(bar[0]['dia']);
                        $("#ico1").removeClass().addClass('wi').addClass(weather_icons[bar[0]['icon']]);
                        $("#tmx1").html(bar[0]['maxTemp']);
                        $("#tmin1").html(bar[0]['minTemp']);
                        
                        $("#Dia2").html(bar[1]['dia']);
                        $("#ico2").removeClass().addClass('wi').addClass(weather_icons[bar[1]['icon']]);
                        $("#tmx2").html(bar[1]['maxTemp']);
                        $("#tmin2").html(bar[1]['minTemp']);

                        
                        $("#Dia3").html(bar[2]['dia']);
                        $("#ico3").removeClass().addClass('wi').addClass(weather_icons[bar[2]['icon']]);
                        $("#tmx3").html(bar[2]['maxTemp']);
                        $("#tmin3").html(bar[2]['minTemp']);
                        
                        $("#Dia4").html(bar[3]['dia']);
                        $("#ico4").removeClass().addClass('wi').addClass(weather_icons[bar[3]['icon']]);
                        $("#tmx4").html(bar[3]['maxTemp']);
                        $("#tmin4").html(bar[3]['minTemp']);

                        $("#Dia5").html(bar[4]['dia']);
                        $("#ico5").removeClass().addClass('wi').addClass(weather_icons[bar[4]['icon']]);
                        $("#tmx5").html(bar[4]['maxTemp']);
                        $("#tmin5").html(bar[4]['minTemp']);

		});
  
	}
	
	function refreshInfos() {
		updateWeather();
	}
	setTimeout(refreshInfos, 1000 * 30);
	refreshInfos();
});
