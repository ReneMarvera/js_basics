// En las funciones de flecha, si se declaran entre parentesis, retorna todo
// Si se declara entre llaves, se tiene que utilizar el return

const testFunction = (valor) =>
( 
    [valor,()=>{console.log(`The value is: ${valor}`)}]
);


const [nombre,putNombre] = testFunction('Rene');

console.log(nombre);
putNombre();