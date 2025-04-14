// 1) Quali sono i tipi primitivi principali in TypeScript?
let metodiPrimitivi = "string, number, boolean, any, null, undefined"
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età,
//  e un booleano che indica se stai studiando TypeScript.
const myName: string = "Pietro"
const myAge: number = 24
const studyingTypescript: boolean = true
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
const greet = (name: string): string => {
  return "Ciao " + name
}

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
  return a + b
}

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const prezzoLordo = (prezzoNetto: number): number => {
  const IVA = 0.22
  return prezzoNetto + prezzoNetto * IVA
}
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const addString = (string1: string, string2: string): number => {
  const sum = string1 + string2
  return sum.length
}
console.log(addString("ciao", "pietro"))

// 7) Cos'è un Type Union e come si scrive?
let valore: string | number | boolean

valore = "Ciao"
valore = 5
valore = false

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let variabile: number | null | undefined
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type giornoSettimana =
  | "Lunedi"
  | "Martedi"
  | "Mercoledi"
  | "Giovedi"
  | "Venerdi"
  | "Sabato"
  | "Domenica"

// 10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const dati: [string, string, string, number, number] = ["uno", "due", "tre", 4, 5];
// 12) Qual è la differenza tra type e interface?
let risposta12='Type definisce tutti i tipi di dati, interface definisce la struttura di un oggetto'
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface utente {
    firstname: string
    lastname: string
    age: number
  }
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface utenteCompleto extends utente{
    email:string
    phone?:number
}
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
const Studente:{nome:string,voto:number}[]=[
    {nome:'sara',voto:24},
    {nome:'marco',voto:27}
]
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo{
    brand:string
    price:number
    horsePower:number
}

interface Auto extends Veicolo{
    fuoristrada:boolean
    sportMode:boolean
}
// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar: Auto={
    brand:'Jeep',
    price:25000,
    horsePower:90,
    fuoristrada:true,
    sportMode:false
}
// 18) Cosa sono i Generics in TypeScript?
const generics:string ='Permettono di avere componenti riutilizzabili senza dover in anticipo specificare il dato'
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
