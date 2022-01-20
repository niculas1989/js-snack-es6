console.log('JS OK');

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

//! FIRST STEP
//| creazione della lista (array) di oggetti

const bikes = [
    { nome: 'ciccio', peso: 3 },
    { nome: 'bianchi', peso: 5 },
    { nome: 'pasticcio', peso: 1 },
    { nome: 'chicco', peso: 8 },
    { nome: 'pasticcio', peso: 3 },
    { nome: 'peppa', peso: 7 },
    { nome: 'crispy', peso: 3 }
]

//! SECOND STEP
//| ciclo in cui cercare ciò che mi interessa
// inizializzo una variabile vuota
let weight = 0;

// ciclo in cui "girare"
for (let j = 0; j < bikes.length; j++) {
    let { peso } = bikes[j];
    console.log(peso);

}

