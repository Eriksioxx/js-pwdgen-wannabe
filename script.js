console.log('JS OK!')
// chiedi nome, cognome e colore preferito
// crea la password supersicura concatenando gli input dell'utente + 21

// recupero le infomazioni dall'utente
const nome = prompt('inserisci nome', 'Erik');
const cognome = prompt('Inserisci cognome', 'Schievenin');
const colore = prompt('Inserisci colore preferito', 'Nero');

console.log('nome', nome);
console.log('cognome', cognome);
console.log('colore', colore);


// genero la password

const password = nome + cognome + colore + '21';
console.log(password);

const passwordBackTick = `${nome}${cognome}${colore}21`;
console.log(passwordBackTick);

document.getElementById('password').innerHTML = '<span>' + password + '</span>';
document.getElementById('password2').innerText = 'passwordBackTick';