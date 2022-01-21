console.log('JS OK');
/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

//# step 1 - scrivere una funzione che raggruppa tre valori (come in traccia)
function someNbaPlayers(arrays, a, b) {
    const newArray = arrays.filter((array) => {
        if (newArray < a && newArray > b) {
            return newArray;
        }
    })
}

//# step 2 - creare un array in cui poterci "muovere" all'interno della funzione
const nbaPlayers = [
    'Lebron James',
    'Kevin Durant',
    'Micheal Jordan',
    'Scottie Pippen',
    'Stephen Curry',
    'Blake Griffin',
    'Delonte West',
    'Klay Thompson',
    'Julius Erving'
];

console.log(nbaPlayers);

const somePlayers = someNbaPlayers(nbaPlayers, 4, 8);

console.log(somePlayers);

