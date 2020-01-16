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

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        }
        resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
    })
}

let obtenerEmpleadoSalario = async () => {
    try {
        let empleado = await getEmpleado(3);
        let empleadoSalario = await getSalario(empleado);
        console.log(empleadoSalario);
    } catch (error) {
        console.log(error);
    }
}

obtenerEmpleadoSalario();