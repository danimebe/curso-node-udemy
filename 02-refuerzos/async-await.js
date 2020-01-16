// ASYNC Y AWAIT


let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Daniel')
        }, 3000);
    })
}
let saludo = async () => {
    let nombre = await getNombre();
    return nombre;
}


saludo().then(nombre => console.log(nombre));
