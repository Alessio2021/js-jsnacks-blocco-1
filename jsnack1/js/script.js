// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;
const numb = [];

let i = 0
while (i < 10) {

    const number = parseInt(prompt('inserisci un numero'));
    numb.push(number);

    sum += number;
    
    i++
}
console.log(sum);



// const numb = [];

// let sum = 0;
// for (let index = 0; index < 10; index++) {

//     const number = parseInt(prompt('inserisci un numero'));
//     numb.push(number);
//     sum += number;
// }
//     console.log(sum);
