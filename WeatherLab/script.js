
document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  
  
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=2d89ba8c82c88660a5d4012560cad7d6";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
            let results = "";
      results += '<h1>Weather in ' + json.name + "</h1>";
      for (let i=0; i < json.weather.length; i++) {
	       results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>";
      results += "<p>";
      for (let i=0; i < json.weather.length; i++) {
	      results += "<strong>" + json.weather[i].description + "</strong>";
      	if (i !== json.weather.length - 1)
      	  results += ", ";
      }
      results += "</p>";
      results += "<p>Feels like: " +json.main.feels_like + "°</p>";
  	  results += "<p>Humidity: " +json.main.humidity + "%</p>";
  	  results += "<p>Wind speed: " +json.wind.speed + " mph</p>";
      document.getElementById("weatherResults").innerHTML = results;
        
        
    const hourlyUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=2d89ba8c82c88660a5d4012560cad7d6";
  
  
    fetch(hourlyUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      
      forecast += "<hr><h1>Future Forecast</h1>";
      
      for (let i=0; i < json.list.length; i++) {
      	forecast += "<hr><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
    	  forecast += "<p>Temperature: " + json.list[i].main.temp + "°</p>";
    	  forecast += "<p>Feels like: " +json.list[i].main.feels_like + "°</p>";
    	  forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
    	  forecast += "<p>Humidity: " +json.list[i].main.humidity + "%</p>";
    	  forecast += "<p>Wind speed: " +json.list[i].wind.speed + " mph</p>";
      }
      
      forecast += "<hr>";
      
      document.getElementById("forecastResults").innerHTML = forecast;
        
      });
    });
});
