let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Daniel'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
]

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let usuarioDB = empleados.find(empleado => empleado.id === id);

        if (!usuarioDB) reject(`No se encontró usuario con el id ${id}`);

        resolve(usuarioDB);
    })
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró salario para el empleado ${empleado.nombre}`);
    }
    return { nombre: empleado.nombre, salario: salarioDB.salario };
}

let getInfo = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `El salario de ${empleado.nombre} es de $${resp.salario}`;
}

getInfo(4).then(resp => console.log(resp)).catch(err => console.log(err));



