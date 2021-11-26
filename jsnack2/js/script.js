// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const invitation = [];
let contatoreFor = 0;
let contatoreWhile = 0;

let find = false;
// creare array 4000 nomi
for (let i = 0; i < 4000; i++) {
    const element = 'nome' + i;
    invitation.push(element);
}
const nomeInput = prompt('Inserisci il tuo nome');

// for (let i = 0; i < invitation.length; i++) {

//     if (nomeInput == invitation[i]) {
//         find = true;
//     }

// }

// if (find == false) {
//     console.log('non puoi partecipare alla festa');
// } else {
//     console.log('puoi partecipare alla festa');
// }

let i = 0
while (i < invitation.length && find == false) {

    if (nomeInput == invitation[i]) {
        find = true
    }

    i++
}

if (find) {
    console.log('puoi partecipare alla festa');
} else {
    console.log('non puoi partecipare alla festa');
}
