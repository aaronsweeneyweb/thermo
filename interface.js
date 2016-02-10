$(document).ready(function() {

    var thermostat = new Thermostat();
    updateTemprature();

    function updateTemprature(){
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
    }


    $('#temperature-up').on('click', function() {
      thermostat.up();
      updateTemprature();
    });

    $('#temperature-down').on('click', function() {
      thermostat.down();
      updateTemprature();
    });

    $('#temperature-reset').on('click', function() {
      thermostat.resetTemperature();
      updateTemprature();
    });

    $('#powersaving-on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power-saving-status').text('on');
      updateTemprature();
    });

    $('#powersaving-off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power-saving-status').text('off');
      updateTemprature();
    });

});
