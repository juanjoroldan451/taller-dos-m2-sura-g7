let puntuaciones = [50, 85, -10, 100, 0, 30];
let validas = puntuaciones.filter((puntaje) => puntaje >= 0)
let bonificadas = validas.map(puntuacionValida => puntuacionValida+10)
let totalPuntos = bonificadas.reduce((acumulador , valor) => {return acumulador+valor},0)

console.log(validas);
console.log(bonificadas);
console.log(totalPuntos);