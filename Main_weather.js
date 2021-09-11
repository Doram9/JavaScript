const API_KEY = "84a8e86fd5a65aea6735b98ee784349e";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude; //위도
    console.log(lat);
    const lon = position.coords.longitude; //경도
    console.log(lon);
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("위치를 찾을 수 없습니다.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);