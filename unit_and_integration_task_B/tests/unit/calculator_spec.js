var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });

  it("starts at 0", function(){
    assert.equal(0, calculator.previousTotal);
    assert.equal(0, calculator.runningTotal);
  });

  it("can add two numbers", function(){
    calculator.previousTotal = 1;
    calculator.add(3);
    assert.equal(calculator.runningTotal, 4);
  });

  it("can subtract two numbers", function(){
    calculator.previousTotal = 9;
    calculator.subtract(3);
    assert.equal(calculator.runningTotal, 6);
  });

  it("can multiply two numbers", function(){
    calculator.previousTotal = 3;
    calculator.multiply(10);
    assert.equal(calculator.runningTotal, 30);
  });

  it("can divide two numbers", function(){
    calculator.previousTotal = 100;
    calculator.divide(10);
    assert.equal(calculator.runningTotal, 10);
  });

  it("can interprate multiple number button clicks", function(){
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 24);
  });

  it("chains multiple operations together", function(){
    calculator.numberClick(9);
    calculator.operatorClick("+");
    calculator.numberClick(9);
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(10);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 10);
  });

  it("can clear the running total without changing the calculation", function(){
    calculator.numberClick(9);
    calculator.operatorClick("+");
    calculator.numberClick(9);
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(10);
    calculator.operatorClick("=");
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
    assert.equal(calculator.previousTotal, 10);
  });

});
