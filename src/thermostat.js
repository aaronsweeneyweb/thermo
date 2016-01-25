function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
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
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  },

  isMinimumTemperature: function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
};
