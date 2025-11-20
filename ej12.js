let usuarios2 = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];
let usuarioLuis = usuarios2.find((usuario) => usuario.id == 102)

console.log(usuarioLuis);        
