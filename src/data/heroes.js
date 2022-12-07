// De un archivo se pueden exportar muchas cosas, pero solamente un elemento por default
// Para consumirlo en el archivo externo, se debe declarar import valorDefault,{demasValores1,demasValores2,etc} from './PATH'

const heroes =
[
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC','Marvel'];

export
{
    heroes as default,
    owners
}