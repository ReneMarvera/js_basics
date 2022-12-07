//DESAGREGACION: retornar valores de una funcion u objeto, al retornarlos se asignan directamente a variables con sus nombres propios

const createPersona = (nombre,apellido,ocupacion='empleado',estadoCivil='soltero',direccion) =>
({
    nombre:nombre,
    apellido:apellido,
    ocupacion:ocupacion,
    estadoCivil:estadoCivil,
    direccion:direccion
});

/*const returnPersona = (persona) =>
{
    const {nombre,apellido,estadoCivil,ocupacion} = persona;
    console.log(`Hello, ${nombre} ${apellido}, you're a ${ocupacion} and you're currently ${estadoCivil}`);
}*/

const returnPersona = ({nombre,apellido,estadoCivil,ocupacion,salario=1000}) =>
({
    nombrePersona:nombre,
    apellidoPersona:apellido,
    salarioPersona:salario,
    desc:{
        renta:salario*0.15,
        isss:30
    }
});

let persona = createPersona(`Rene`,`Martinez`,`empleado`,`casado`);
let {nombrePersona,apellidoPersona,salarioPersona:salarioP,desc:{renta,isss}} = returnPersona(persona);
// Primeras dos variables: retorno normal
// salarioPersona: Se cambia su nombre a salarioP
// desc: Se extraen directamente las variables renta e isss, por lo que desc no existe en este entorno
console.log(nombrePersona,apellidoPersona,salarioP);
//console.log(desc); //error
console.log(renta,isss);

//Otra manera de hacer lo de desc, aca existe desc y declaramos aparte sus variables
// let {nombrePersona,apellidoPersona,salarioPersona:salarioP,desc} = returnPersona(persona);
// let {renta,isss} = desc;

