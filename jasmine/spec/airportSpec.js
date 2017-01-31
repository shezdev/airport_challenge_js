// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

describe("Airport", function(){

  it("can ask a plane to land", function(){
    // expect(airport.land).toEqual(jasmine.anything());
    airport = new Airport();
    expect(airport.land).toBeDefined();
  });

});
