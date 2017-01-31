Airport = function() {

};

  Airport.prototype.land = function(plane) {
    return "plane has landed";
  };

  Airport.prototype.takeOff = function(plane) {
    return "plane has taken off"
  };

  Airport.prototype.isStormy = function() {
    weather = new Weather();
    weather.forecast();
    // return true;
    if (weather._weather == "stormy"){
      return true;
    }
    else {
      return false;
    }

  };
