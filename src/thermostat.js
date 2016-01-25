function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTempature = function() {
  return this.temperature;
};
