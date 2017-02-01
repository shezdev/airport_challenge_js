// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function(){

  it("can ask a plane to land", function(){
    airport = new Airport();
    expect(airport.land).toBeDefined();
  });
  it("confirms when a plane has landed", function(){
    airport = new Airport();
    plane = new Plane();
    expect(airport.land(plane)).toContain("plane has landed");
  });
  it("knows that isStormy returns either true or false",function(){
    airport = new Airport();
    expect(typeof airport.isStormy()).toEqual('boolean');
  });
  it("should have an array of planes", function(){
    airport = new Airport();
    expect(airport.planes).toBeDefined();

  });
  it("should throw an error if planes want to take off when it's stormy",function(){
    airport = new Airport();
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane);}).toThrow("Can't take off when its stormy");
  });
});
