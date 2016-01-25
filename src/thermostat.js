function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype = {
  
  getCurrentTemperature: function() {
    return this.temperature;
  },

  up: function() {
    this.temperature += 1;
  },

  down: function() {
    this.temperature -= 1;
  }
};
