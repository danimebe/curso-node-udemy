const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=09cce5d4c113b241de19b9dbb950c9fa&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}