const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4134f7d5dd0082ce24c59d1202b27898`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}