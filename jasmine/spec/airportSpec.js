// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function(){

  it("can ask a plane to land", function(){
    // expect(airport.land).toEqual(jasmine.anything());
    airport = new Airport();
    expect(airport.land).toBeDefined();
  });
  it("confirms when a plane has landed", function(){
    airport = new Airport();
    plane = new Plane();
    expect(airport.land(plane)).toContain("plane has landed");

  });

  it("can ask a plane to take off", function(){
    // expect(airport.land).toEqual(jasmine.anything());
    airport = new Airport();
      expect(airport.takeOff).toBeDefined();
  });

  it("confirms when a plane has taken off", function(){
    airport = new Airport();
    plane = new Plane();
    expect(airport.takeOff(plane)).toContain("plane has taken off");
  });

});
