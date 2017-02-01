const MAX_CAPACITY = 10;

Airport = function() {
  this.planes = [];
  this.capacity = MAX_CAPACITY;
};

  Airport.prototype.land = function(plane) {
    condition = this.isStormy();
    if ( condition == true) {
    throw new Error("Can't land when its stormy");
    }
    else{
      if (this.isFull()){
      throw new Error("Airport is full!");
      }
      else {
        this.planes.push(plane)
        return "plane has landed";
      }
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

  Airport.prototype.isFull = function() {
    if (this.planes.length == this.capacity) {
    return true;
    }
    else {
      return false;
    }
  };
