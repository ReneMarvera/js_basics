import { getHeroeById, getHeroesByOwner } from './08-imp-ex';

// const prom = new Promise((resolve, reject) =>
// {
//     const timeout = 2000; // Milisegundos (2 segundos para este caso)
//     setTimeout(() =>
//     {
//         const heroe = getHeroeById(1);
//         resolve( heroe );
//         // reject( heroe );

//     }, timeout);
  
// });

// prom
// .then( hero => 
// {
//     console.table(hero);
// })
// .catch( err =>
// {
//     console.warn( err )
// });


// OOOOOOOOOOOOOJOOOOOOOOOOOOOOOO

// Funcion que devuelve una promesa, con lo que ya podemos hacer uso de then() y catch()
const getHeroeByIdAsync = id => 
{
    return new Promise((resolve, reject) =>
    {
        const timeout = 2000; // Milisegundos (2 segundos para este caso)
        setTimeout(() =>
        {
            const heroe = getHeroeById(id);
            heroe ? resolve( heroe ) : reject('Algo salió mal');
        }, timeout);
    });

    // Una promise "DEVUELVE" solo un callback (resolve or reject), y en realidad devuelve el parámetro ingresado en el callback
    // este compartamiento debe ser programado, en el caso, se programa con la linea: 'heroe ? resolve() : reject();'
    // Al llamar a la promise (más adelante en el código) se debe programar la manera en que estos callbacks (o más bien sus
    // parámetros) son usados
    // NOTA: Estudiar si callback es una función o es el parámetro ingresado que devuelven.
}

getHeroeByIdAsync(1)
.then(res =>
{
    console.log( 'heroe', res );
})
.catch( err =>
{
    console.warn( err );
});

// En caso de NO definir el catch, el reject siempre retorna el parámentro, pero, en este caso
// retornaría la String 'Algo salió mal', dentro de un error de Uncaught (Expecion no controlada)

// OTRA MANERA DE HACER EL THEN Y CATCH

// getHeroeByIdAsync(1).
// then( console.log )
// .catch( console.warn ); 

// Note que no se envia el parámetro 'err', ya que por defecto, al dejar sola la referencia a la función (en este caso console.warn)
// Dicha función, toma el primer argumento que reciba el catch, es decir el enviado por el reject

// Tampoco se puede enviar el  otro argumento, por lo que no se puede pintar la palabra 'heroe' de la función then original

export
{
    getHeroeByIdAsync
}