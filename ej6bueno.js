let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
let listaPlana = grupos.reduce((acumulador, resultado) => acumulador.concat(resultado))

console.log(listaPlana);
