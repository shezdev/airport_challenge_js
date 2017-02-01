Weather = function() {
};

Weather.prototype.forecast = function(){
    var meteo = [];
    var met;
    meteo = ["stormy","sunny","sunny","sunny"]
    return met = meteo[Math.floor(Math.random() * meteo.length)];
  };
