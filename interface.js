$(document).ready(function() {

    var thermostat = new Thermostat();
    updateTemprature();

    function updateTemprature(){
      $('#temperature').text(thermostat.temperature);
    }


    $('#temperature-up').on('click', function() {
      thermostat.up();
      updateTemprature();
    });

    $('#temperature-down').on('click', function() {
      thermostat.down();
      updateTemprature();
    });

});
