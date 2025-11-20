let tablero = ["X", "O", "X"];
let nuevoTablero = tablero.map((valor , indice) => {
    if(indice === 1)
    {
        return "x";
    }
    else
    {
       return valor;
    }
})

console.log(tablero);
console.log(nuevoTablero);

