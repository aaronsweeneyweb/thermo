function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype = {

  getCurrentTemperature: function() {
    return this.temperature;
  },

  up: function() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  },

  down: function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  },

  isMaximumTemperature: function() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  },

  isMinimumTemperature: function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  },

  isPowerSavingModeOn: function() {
    return this.powerSavingMode === true;
  },

  switchPowerSavingModeOff: function() {
    this.powerSavingMode = false;
  },

  switchPowerSavingModeOn: function() {
    this.powerSavingMode = true;
  },

  resetTemperature: function() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

};
