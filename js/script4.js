console.log('JS OK');

/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

//# step1 - creazione lista studenti

const students = [
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'salvatore pitanza', id: 40, voto: 40 },
    { nome: 'adriana santorio', id: 500, voto: 90 },
    { nome: 'laura bigoni', id: 10, voto: 80 },
    { nome: 'nicolas maranzano', id: 350, voto: 90 },
    { nome: 'matteo imbimbo', id: 10, voto: 70 },
    { nome: 'marco trucellito', id: 90, voto: 85 },
    { nome: 'marco leali', id: 85, voto: 45 },
    { nome: 'daniel ofosu', id: 20, voto: 30 },
    { nome: 'davide vinciguerra', id: 430, voto: 35 },
    { nome: 'davide croce', id: 110, voto: 25 },
    { nome: 'crapanzano', id: 42, voto: 15 },
    { nome: 'ajeje brazof', id: 1, voto: 5 },
    { nome: 'holiver atton', id: 55, voto: 50 },
    { nome: 'john snow', id: 610, voto: 90 },
    { nome: 'john wick', id: 1, voto: 100 },
    { nome: 'jack sparrow', id: 900, voto: 10 },
    { nome: 'marco mazzoli', id: 105, voto: 70 },
    { nome: 'paolo noise', id: 125, voto: 80 },
    { nome: 'fabio alisei', id: 106, voto: 100 },
    { nome: 'claudio bisio', id: 100, voto: 70 },
    { nome: 'clara conte', id: 35, voto: 85 },
    { nome: 'checco zalone', id: 980, voto: 20 },
    { nome: 'pippo baudo', id: 800, voto: 90 },
    { nome: 'mike buongiorno', id: 410, voto: 80 },
    { nome: 'gabriele mendola', id: 240, voto: 35 }
];

console.table(students);

//# step2 - creazione di una nuova lista contenente il nome degli studenti in maiuscolo

const target = students.map(student => student.nome.charAt(0).toUpperCase() + student.nome.substring(1).toLowerCase());

console.table(target);

// # step3 - Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

const votes = students.map(student => {
    if (student.voto > 70) {
        return student;
    }
});

console.table(votes);

// # step4 - Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

const votesId = students.map(student => {
    if (student.id > 120 && student.voto > 70) {
        return student;
    }
})

console.table(votesId);



