// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource',function($resource) {
    
    this.GetWeather = function (city, days) {
     var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=3aaf05eb6509fee790df1c39ffd604e2", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    return weatherAPI.get({ q: city, cnt: days });
    };
}]);