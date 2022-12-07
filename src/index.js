import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-ex";

const prom = new Promise( (resolve,reject) => 
{
    const timeout = 2000;
    setTimeout(() => {
        console.log(getHeroeById(2));
    }, timeout);
});