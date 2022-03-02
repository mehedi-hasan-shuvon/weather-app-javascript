

const API_KEY = `fee04885d0019095680668b72856f412`;


const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    loadData(url)

}

const loadData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));
}

const showData = (temp) => {
    console.log(temp);
}