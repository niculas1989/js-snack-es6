console.log('JS OK');

/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//! Step nr 0
//| creazione di una funzione per generare numeri random

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


//! Step nr 1
//| Creazione dei due array di squadre


//# piccolo appunto: si, sono un appassionato di NBA.

const ovest = [
    { nome: 'lakers', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'GSW', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Sacramento', puntiFatti: 0, falliSubiti: 0 }
];

const est = [
    { nome: 'chicago', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'toronto', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'miami', puntiFatti: 0, falliSubiti: 0 }
]


//! Unione dei due array:
const NBA = [...ovest, ...est];

console.table(NBA);

for (let k = 0; k < NBA.length; k++) {
    let { nome, falliSubiti } = NBA[k];
    console.log(nome);
    console.log(falliSubiti);
}