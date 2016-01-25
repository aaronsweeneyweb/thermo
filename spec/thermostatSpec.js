describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTempature()).toEqual(20);
  });

  it('increases the temperature with the up button', function() {
    thermostat.up();
    expect(thermostat.getCurrentTempature()).toEqual(21);
  });

  it('decreases the temperature with the down button', function() {
    thermostat.down();
    expect(thermostat.getCurrentTempature()).toEqual(19);
  });
});
