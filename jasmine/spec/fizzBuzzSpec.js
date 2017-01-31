
describe("FizzBuzz", function() {
  it("returns fizz when given a number divisible by 3", function() {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("returns buzz when given a number divisible by 5", function() {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("returns fizzbuzz when given a number divisible by 3 and 5", function(){
    expect(fizzbuzz(15)).toEqual("FizzBuzz")
  });
  it("returns the number when given a number neither divisible by 3 nor by 5", function(){
    expect(fizzbuzz(11)).toEqual(11)
  });

});
