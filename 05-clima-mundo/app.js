const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const climaResp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${direccion} es de ${climaResp}`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
