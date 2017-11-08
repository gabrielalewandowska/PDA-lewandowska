var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('number buttons should update display of the running total', function(){
      element(by.css('#number1')).click();
      element(by.css('#number2')).click();
      element(by.css('#number3')).click();
      element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1234')
  })

  it('addition updates the display with the result', function(){
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5')
})

  it('subtraction updates the display with the result', function(){
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('multiplication updates the display with the result', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18')
  })

  it('division updates the display with the result', function(){
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('can chain multiple operations', function(){
    element(by.css('#number1')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18')
  })

  it('can display a positive number', function(){
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18')
  })

  it('can display a negative number', function(){
    element(by.css('#number3')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-10')
  })

  it('can display decimal numbers', function(){
    element(by.css('#number1')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6.5')
  })

  it('can display a large number', function(){
    element(by.css('#number3')).click();
    element(by.css('#number5')).click();
    element(by.css('#number6')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#number5')).click();
    element(by.css('#number7')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('16302258')
  })

// When dividing by zero it should display "Error". Instead, it displayed "Infinity".
// I had to modify the code to make the following test pass.

  it('displays error when dividing by zero', function(){
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Error')
  });


});
