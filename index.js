// 1) Quali sono i tipi primitivi principali in TypeScript?
var metodiPrimitivi = "string, number, boolean, any, null, undefined";
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età,
//  e un booleano che indica se stai studiando TypeScript.
var myName = "Pietro";
var myAge = 24;
var studyingTypescript = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoLordo = function (prezzoNetto) {
    var IVA = 0.22;
    return prezzoNetto + prezzoNetto * IVA;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var addString = function (string1, string2) {
    var sum = string1 + string2;
    return sum.length;
};
console.log(addString("ciao", "pietro"));
// 7) Cos'è un Type Union e come si scrive?
var valore;
valore = "Ciao";
valore = 5;
valore = false;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var variabile;
// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var dati = ["uno", "due", "tre", 4, 5];
// 12) Qual è la differenza tra type e interface?
var risposta12 = 'Type definisce tutti i tipi di dati, interface definisce la struttura di un oggetto';
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
var Studente = [
    { nome: 'sara', voto: 24 },
    { nome: 'marco', voto: 27 }
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myCar = {
    brand: 'Jeep',
    price: 25000,
    horsePower: 90,
    fuoristrada: true,
    sportMode: false
};
// 18) Cosa sono i Generics in TypeScript?
var generics = 'Permettono di avere componenti riutilizzabili senza dover in anticipo specificare il dato';
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
