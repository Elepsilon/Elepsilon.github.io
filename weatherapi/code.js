$(document).ready(()=>{
    const sendRequest = (city) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=694baf2380544bcfab9141808220907&q=${city}$&aqi=no`
        
        $.get(url, function(response) {
            $("#city").text("Weather in " + response.location.name)
            $("#temperature").text(response.current.temp_c + "°C")
            $("#icon-image").attr("src", response.current.condition.icon);
            $("#condition").text("Condition: " + response.current.condition.text)
            $("#humidity").text("Humidity: " + response.current.humidity)
            $("#wind").text("Wind Speed: " + response.current.wind_kph + " Km/h")
        })
    }

    $("#search-bar").submit(function(e) {
        e.preventDefault();
        const city = $("#city-input").val();
        sendRequest(city);
    })
})
