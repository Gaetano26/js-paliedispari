/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let select = document.querySelector ('select');
const btn= document.querySelector('button');
btn.addEventListener('click', play);

function play () {
     let sceltaGiocatore =  select.value;
     let numeroGiocatore = document.getElementById('number').value;
     let numeroComputer = Math.floor((Math.random() * 5) + 1);
     console.log(numeroGiocatore)
}


