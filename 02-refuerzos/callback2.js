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

let getEmpleado = (id, callback) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id);
    !empleadoDB ? callback(`No se encontró el usuario con id ${id} en la BD`) : callback(null, empleadoDB);
}

let getSalario = (empleado, callback) => {
    const salario = salarios.find(salario => salario.id === empleado.id);
    const { nombre } = empleado;

    if (!salario) {
        callback(`No se encontró un salario para el usuario ${nombre}`);
    } else {
        callback(null, { nombre, salario: salario.salario, id: empleado.id });
    }

}


getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, empleadoSalario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${empleadoSalario.nombre} es de ${empleadoSalario.salario}$ `);
    })
})
