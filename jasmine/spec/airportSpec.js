// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function(){

  var airport;
  beforeEach(function() {
    airport = new Airport();
  });

  var plane = jasmine.createSpy('plane')

  it("can ask a plane to land", function(){
    expect(airport.land).toBeDefined();
  });

  it("confirms when a plane has landed", function(){
    spyOn(airport,'isStormy').and.returnValue(false);
    expect(airport.land(plane)).toContain("plane has landed");
    expect(airport.planes).toContain(plane)
  });

  it("knows that isStormy returns either true or false",function(){
    expect(typeof airport.isStormy()).toEqual('boolean');
  });

  it("should have an array of planes", function(){
    expect(airport.planes).toBeDefined();
  });

  it("can ask a plane to takeoff", function(){
    expect(airport.takeOff).toBeDefined();
  });

  it("confirms when a plane has taken off", function(){
    spyOn(airport,'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.takeOff(plane)).toContain("plane has taken off");
    expect(airport.planes).not.toContain(plane)
  });

  it("should throw an error if planes want to take off when it's stormy",function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane)}).toThrowError("Can't take off when its stormy");
  });

  it("should throw an error if planes want to land when it's stormy",function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.land(plane)}).toThrowError("Can't land when its stormy");
  });
});
