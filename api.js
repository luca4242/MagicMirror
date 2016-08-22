$(document).ready(function(){

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Montreal,qc&appid=d5c8b9897a264cb41fb4f6cc4e0fc18c&units=metric', function(results){
   $("#currentweather").append(parseInt(results.main.temp_max) + " &#176;");
   if (results.weather[0].icon == "01d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/01d.png" />');
   }
   else if (results.weather[0].icon == "01n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/01n.png" />');
   }
   else if (results.weather[0].icon == "02d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/02d.png" />');
   }
   else if (results.weather[0].icon == "02n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/02n.png" />');
   }
   else if (results.weather[0].icon == "03d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/03d.png" />');
   }
   else if (results.weather[0].icon == "03n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/03n.png" />');
   }
   else if (results.weather[0].icon == "04d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/04d.png" />');
   }
   else if (results.weather[0].icon == "04n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/04n.png" />');
   }
   else if (results.weather[0].icon == "09d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/09d.png" />');
   }
   else if (results.weather[0].icon =="09n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/09n.png" />');
   }
   else if (results.weather[0].icon == "10d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/10d.png" />');
   }
   else if (results.weather[0].icon == "10n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/10n.png" />');
   }
   else if (results.weather[0].icon == "11d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/11d.png" />');
   }
   else if (results.weather[0].icon == "11n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/11n.png" />');
   }
   else if (results.weather[0].icon == "13d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/13d.png" />');
   }
   else if (results.weather[0].icon == "13n") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/13n.png" />');
   }
   else if (results.weather[0].icon == "50d") {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/50d.png" />');
   }
   else {
     $('#weathericon').prepend('<img id="theImg" src="WeatherIcons/50n.png" />');
   }
});

$.ajax( {
  url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=",
  success: function(data) {
    var post = data.shift();  //The data is an array of posts. Grab the first one.
    $("#quote-title").text(post.title);
    $("#quote-content").html(post.content);
  },
  cache: false
 });

});
