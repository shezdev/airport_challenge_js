Airport = function() {
  this.planes = [];
};

  Airport.prototype.land = function(plane) {
    condition = this.isStormy();
    if ( condition == true) {
    throw new Error("Can't land when its stormy");
    }
    else{
    this.planes.push(plane)
    return "plane has landed";
    }
  };

  Airport.prototype.takeOff = function(plane) {
    condition = this.isStormy();
    if ( condition == true) {
    throw new Error("Can't take off when its stormy");
    }
    else{
      this.planes.pop(plane)
    return "plane has taken off"}
  };

  Airport.prototype.isStormy = function() {
    var weather = new Weather();
    var condition = weather.forecast();
    if (condition == "stormy"){
      return true
    }
    else{return false};

};
