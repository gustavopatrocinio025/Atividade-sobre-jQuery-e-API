$(document).ready(function() {
  $('#btnSearch').click(function() {
    const city = $('#city').val().trim();
    const apiKey = 'fa383a792f50989197752911dba007ff'; 

    if (!city) {
      alert('Por favor, digite o nome da cidade!');
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`;

    $.ajax({
      url: url,
      type: 'GET',
      success: function(data) {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const cityName = data.name;
        const country = data.sys.country;

        $('#result').html(`
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Clima em ${cityName}, ${country}</h2>
              <p class="card-text">Temperatura: <strong>${temp} °C</strong></p>
              <p class="card-text">Condição: <strong>${desc}</strong></p>
            </div>
          </div>
        `);
      },
      error: function() {
        $('#result').html('<p class="text-danger">Não foi possível obter os dados do clima. Verifique o nome da cidade ou tente novamente.</p>');
      }
    });
  });
});