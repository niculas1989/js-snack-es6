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
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
    { nome: 'marco de iulio', id: 210, voto: 70 },
]