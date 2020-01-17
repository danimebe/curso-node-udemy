const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '8eacfca3aemsh80e849699ad229ep11e051jsn90208db1bbff' },
    })
    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}


