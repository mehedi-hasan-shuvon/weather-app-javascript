

const API_KEY = `fee04885d0019095680668b72856f412`;


const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    loadData(url)

}

const loadData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data));
}

const showData = (temp) => {
    console.log(temp);

    // const cityName = document.getElementById('city');
    console.log(temp.sys.country);
    setInnerText('city', temp.name);
    setInnerText('country', temp.sys.country);
    setInnerText('temparature', temp.main.temp);
    setInnerText('temp-condition', temp.weather[0].main);

    const iconURL = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    // console.log(iconURL);
    document.getElementById('img').src = iconURL;

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}