import  heroesss, {owners} from '../data/heroes';
// Aunque en el archivo heroes.js la constante se llame heroes, al ser un valor importado po 
// defecto podemos renombrarla de la manera en que querramos al importarla
const getHeroeById = id => heroesss.find( el => el.id === id);
const getHeroesByOwner = owner => heroesss.filter( el => el.owner === owner);

/*const heroesDC = getHeroesByOwner('DC');
console.table(heroesDC);

console.table(owners);*/

export
{
    getHeroeById,
    getHeroesByOwner
}