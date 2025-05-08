document.addEventListener("DOMContentLoaded" , () => {
    const cityInput = document.getElementById("city-input")
    const WeatherButton = document.getElementById("get-weather-button")
    const WeatherInfo = document.getElementById("weather-info")
    const CityInfo = document.getElementById("city-name")
    const Temprature = document.getElementById("temprature")
    const Description = document.getElementById("description")
    const ErrorPrompt = document.getElementById("error-message")
    const API_KEY = "c605dfc91e62a010d373b803d4a233ca"


    WeatherButton.addEventListener("click" , async () =>{
        const city = cityInput.value.trim()
        if (!city) 
            return;
        
            try {
                const WeatherData = await FetchWeather(city)
                DisplayWeather(WeatherData)
            } catch (error) {
                ErrorMessage()
            }
        
            async function FetchWeather (city) {
                // Fetch Weather Data
                const URl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

                const fetchedData = await fetch(URl)
                console.log(typeof fetchedData);
                console.log(fetchedData);

                if (fetchedData.ok === false ){
                    throw new Error("City Not Found !")
                }
                const data = await fetchedData.json()
                return data
            }
            function DisplayWeather (WeatherData){
                // Display fetched Data
                console.log(WeatherData);
                const {name,main,weather} = WeatherData;
                CityInfo.textContent = name
                Temprature.textContent = `Teamprature ${main.temp} Feels Like ${main.feels_like}`
                Description.textContent = `Description ${weather[0].description}`

                // removing the hidden
                WeatherInfo.classList.remove("hidden")

            }
            function ErrorMessage (){
                // Display Error Message if any
                WeatherInfo.classList.add("hidden")

                ErrorPrompt.classList.remove("hidden")
            }

        
    })
    




})