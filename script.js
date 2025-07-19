<script>

        const apiKey = "04b84877c2e3ba9b04115227d03b5532";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");



        async function checkweather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            var data = await response.json();

            console.log('res',data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



        }
        searchbtn.addEventListener("click", () => {
            checkweather(searchbox.value);

        }

        )


    </script>