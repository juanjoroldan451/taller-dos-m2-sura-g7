let ventas = [150, 300, 100, 50];
let totalVentas = ventas.reduce((acumulador ,resultado) => { return acumulador + resultado}, 0)

console.log(totalVentas);

