// mensaje en el log
console.log("Esto es un mensaje en el log");
// error
console.error("Esto es un error");
// Añadir información
console.info("Añade información a la consola");
// warning
console.warn("Envía un aviso");

const gente = [
	{nombre: 'Diego', edad: 44},
  {nombre: 'Andrea', edad: 35},
  {nombre: 'Johana', edad: 20},
];
console.table(gente);
gente.forEach((persona,index) =>{
	console.groupCollapsed(`${persona.nombre}`);
  console.log(persona.edad);
  console.log("Esta es mi edad :(");
  console.groupEnd(`${persona.nombre}`);
});
