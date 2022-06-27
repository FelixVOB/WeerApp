const form = document.querySelector("form");
const cityInput = document.getElementById("city");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let city = cityInput.value;
    const owmUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=65afd498e5391d1527951aa3dcecb26e`;
tableBody.innerHTML = "";
    try {
    let response = await fetch(owmUrl);
    let weatherResult = await response.json();
    console.log(weatherResult);

    for (let i = 0; i < weatherResult.list.length; i++) {
        let weatherForecast = weatherResult.list[i];
        let date = new Date(weatherForecast.dt * 1000);
        let row = 
        `<tr>
            <td>${date.toLocaleString()}</td>
            <td>${(weatherForecast.main.temp - 273.15).toFixed(1)}</td>
            <td>${weatherForecast.weather[0].description}</td>
        </tr>`;
        tableBody.innerHTML += row
    }
} catch (ex){
    console.log("something went wrong: " + ex)
}
});