console.log('JS OK');
/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

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
    'Julius Erving',
    'Karl Malone',
    'John Stockton'
];

//* vorrei "muovermi" all'interno dell'array che ho qui sopra in due intervalli:
//* dalla posizione dell'array 2 (Jordan) fino alla posizione 9 (Malone)
//* devo creare quindi un nuovo array con questo nuovo intervallo

//| provo a buttar giù una funzione che mi permetta di muovermi tra gli intervalli che stabilisco io

//# creazione nuovo array vuoto
let someNbaPlayers = nbaPlayers.slice(2, 8);

console.log(someNbaPlayers);
