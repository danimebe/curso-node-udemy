

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wingston',
    poder: 'Regeneración',
    getNombre: () => {
        this.nombre = 'wade';
        return `${this.nombre} ${this.apellido} - Poder: ${this.poder} ${this}`},
}

console.log(deadpool.getNombre());