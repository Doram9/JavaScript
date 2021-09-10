const API_KEY = "7e032cf567e797bf90893aca67185aa4";

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}units=metric`;
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