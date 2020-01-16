/* setTimeout(() => {
    console.log('Hola Mundo!');
}, 3000); */

const getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Daniel',
        id
    }
    if (id === 20) {
        callback(`El usuario con el id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (err, usuario) => {

    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
})