async function weather() {

    try {
        const val = document.getElementById("text").value;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=488ef7037bc90adcd024a01c66406a88&units=metric`);
        console.log(res);

        if (res.status == 404 || res.status == 400) {
            console.log("City not found");
        } else {
            const data = await res.json();
            console.log(data);

            
            document.getElementById("maindiv").innerHTML = `
            <div id="subdiv1">
                <div class="name">${data.name}</div>
                <div class="main_temp">${data.main.temp} °C</div>
                <div class="descptn">${data.weather[0].description}</div>
                <div class="mainw" id="m1">
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="icon">
                </div>
            </div>
            
            <hr>
            <div id="details">
                <div class="heading">WEATHER DETAILS</div>
                <br>
                <div id="columns">
                    <div id="left_col">
                        <div>Feels like: ${data.main.feels_like} °C</div>
                        <div>Wind: ${data.wind.speed} m/s</div>
                        <div>Visibility: ${data.visibility} meters</div>
                    </div>
                    <div id="right_col">
                        <div>Humidity: ${data.main.humidity}%</div>
                        <div>Air Pressure: ${data.main.pressure} hPa</div>
                    </div>
                </div>
            </div>
        `;
        }
    }
    catch(error){
        console.log(error)
    }

}

