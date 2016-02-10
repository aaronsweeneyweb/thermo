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

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    });

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#current-temperature').text(data.main.temp);
      });
    });

});
