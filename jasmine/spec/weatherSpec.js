describe("Weather", function(){

  it("exists", function(){
    // expect(airport.land).toEqual(jasmine.anything());
    weather = new Weather();
    expect(weather).toBeDefined();
  });

  it("has a forecast", function(){
    weather = new Weather();
    expect(weather.forecast).toBeDefined();
  });
  // it("returns either sunny or stormy", function(){
  //   weather = new Weather();
  //   spyOn(weather,'forecast').and.returnValue("stormy");
  //   expect(weather.forecast();).toEqual("stormy");
  //
  // });
});
