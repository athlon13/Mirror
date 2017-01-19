var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var cheerio = require('cheerio');
var config = require('./config');
var moment = require('moment');
var emtmadApi = require('emtmad-bus-times-node');
var idStop = '1182';


var movies = [];
var refreshMovies = function() {
	request(config.widget.cinema.url, function (error, response, html) {
		if (error || response.statusCode !== 200)
			return;
		
		var $ = cheerio.load(html);
		
		$('.hred').each(function(i, elem) {
			var movie = new Object();
			movie.title = $(this).find('.meta-title-link').text().trim();
			movie.img = $(this).find('.thumbnail-img').attr('data-src');
			movie.duration = $(this).find('.meta-body-item').text();
			var indexDuration = movie.duration.indexOf("|");
			movie.duration = movie.duration.substring(indexDuration + 1, indexDuration + 10).trim().replace(" ", "").replace("min", "");
			movie.pressRating = $(this).find('.stareval-note').first().text().trim();
			movie.peopleRating = $(this).find('.stareval-note').eq(1).text().trim();
			movie.totalRating = parseInt(movie.pressRating) + parseInt(movie.peopleRating);
			movie.hours = [];
			$(this).find('.showtimes-format').first().find('.hours-item-value').each(function(i, elem) {
				movie.hours.push($(this).text());
			});
			
			if (!isNaN(movie.totalRating) && movie.totalRating > 1 && movie.hours.length > 0)
				movies.push(movie);
		});
		
		//movies.sort(function(a, b) { return (a.totalRating > b.totalRating) ? -1 : 1;} );
	});
}
setInterval(refreshMovies, 1000 * 60 * config.widget.cinema.refreshRateInMinutes);
refreshMovies();

module.exports.cinema = function (req, res) {
	res.send(JSON.stringify(movies));
}

var Prado=[];
var refreshPrado = function(){
    request(config.widget.Prado.url, function (error, response, html) {
		if (error || response.statusCode !== 200)
			return; 
                var pp = cheerio.load(html);
                pp('.expo a').each(function(i,elem){
                    var cuadro = new Object();
                    cuadro.Descripcion=pp(this).find('figure figcaption h3').text();
                    cuadro.Fecha=pp(this).find('figure figcaption p').text();
                    cuadro.Img=pp(this).find('img').attr('src');
                    Prado.push(cuadro);
                });
    });

}
setInterval(refreshPrado, 1000 * 60 * config.widget.Prado.refreshRateInMinutes);
refreshPrado();

module.exports.prado = function (req, res) {
	res.send(JSON.stringify(Prado));
}

var Tyssen = [];
var refreshTyssen = function(){
    request(config.widget.Tyssen.url, function (error1, response1, body1) {
                if (error1 || response1.statusCode !== 200)
                       return;
                var tt = cheerio.load(body1);
                tt('.exp').each(function(i,elem) {
                    var tisen = new Object();
                    tisen.nombre=tt(this).find('img').attr('alt');
                    tisen.fecha=tt(this).find('h3 span').text().trim();
                    tisen.imagen=tt(this).find('img').attr('src');
                    Tyssen.push(tisen);
                });
    });
}

setInterval(refreshTyssen, 1000 * 60 * config.widget.Tyssen.refreshRateInMinutes);
refreshTyssen();

module.exports.tyssen = function (req, res) {
	res.send(JSON.stringify(Tyssen));
}


var news = [];
var refreshNews = function() {
	request(config.widget.news.url, function (error, response, data) {
		if (error || response.statusCode !== 200)
			return;
		
        	parser.parseString(data, function (err, result) {
		       result.rss.channel[0].item.forEach(newsItem => {
                              var entry_news = new Object();
 			      entry_news.title = newsItem.title[0];
                              var cJson=JSON.stringify(newsItem.description[0]);
			      var pithumb=cJson.search('https');
                              var pfthumb=cJson.search('width');
                              var urlthumb=cJson.slice(pithumb, pfthumb-2);
                              pides=cJson.search('<p>');
                              pfdes=cJson.search('.</p>');
                              var resumen=cJson.slice(pides+3,pfdes);
			      entry_news.description = resumen;
                              if ( urlthumb===""){
      			         entry_news.img = "../img/Meneame_favicon.png";
                              } else {
                                 entry_news.img = urlthumb;
                              }
			      news.push(entry_news);
		       });
		});
	});
}
setInterval(refreshNews, 1000 * 60 * config.widget.news.refreshRateInMinutes);
refreshNews();

module.exports.news = function (req, res) {
	res.send(JSON.stringify(news));
}

var weather = [];
var forecast = [];
var t = [];
var chorizo = {};
var refreshWeather = function() {
	request({url: config.widget.weather.url, json: true}, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			 chorizo = body;
                         t.push({
                           icono: chorizo ['weather'][0]['icon'],
                           ctemp: chorizo ['main']['temp'],
                           cpres: chorizo ['main']['pressure'],
                           chumd: chorizo ['main']['humidity']
                         });
                }
	});
        request({url: config.widget.forecast.url, json: true}, function (error, response, data) {
                if (!error && response.statusCode === 200) {
                    for (var i = 0, count = data.list.length; i < count; i++) {
                          forecast.push({
                                dia: moment(data.list[i].dt,"X").format("ddd"),
                                icon: data.list[i].weather[0].icon,
                                maxTemp: Math.round(data.list[i].temp.max - 273.15),
                                minTemp: Math.round(data.list[i].temp.min - 273.15)
                           });
                     }
                }
                
        });
        weather = t.push(forecast);
        weather=t;
}

setInterval(refreshWeather, 1000 * 60 * config.widget.weather.refreshRateInMinutes);
refreshWeather();

module.exports.weather = function (req, res) {
	res.send(weather);
}

var response= {};
var refreshEmt = function(){
    var globalIdClient = '';
    var globalPasskey = '';
    emtmadApi.initAPICredentials(globalIdClient,globalPasskey);
    var formData = {"cultureInfo": "ES","idStop": idStop,"idClient": globalIdClient,"passKey": globalPasskey}; 
    request.post({url: config.widget.emt.url,form: formData,strictSSL: false}, function (err, httpResponse, body) {
			if ( err ) {
				console.error('Error while connecting:');
				response.status = 400;
				response.error = err;
			}else{
				//console.log('REST call OK');
				response.status = 200;
				response.arrives = (JSON.parse(body)).arrives;
			}
                        if (typeof callback==="function"){
                           callback (response);
                        }
    });
}

setInterval(refreshEmt, 1000 * 60 * config.widget.emt.refreshRateInMinutes);
refreshEmt();

module.exports.emt = function (req, res) {
	res.send(response.arrives);
}

