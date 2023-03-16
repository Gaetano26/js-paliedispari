/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
let number = document.getElementById ('number')
let select = document.querySelector('select');
const btn= document.querySelector('button');
btn.addEventListener('click', play);

function play () {
     let scelta = select.value;
     let numeroGiocatore = number.value;
     let numeroComputer = Math.floor((Math.random() * 5) + 1);
     //console.log(numeroGiocatore)
    let somma = numeroComputer + parseInt(numeroGiocatore);
    let risultato = somma % 2;

    if (somma === 0) {
        somma = 'pari'
    } else {
        somma = 'dispari'
    }
}



if (risultato === scelta) {
    document.getElementById ('risultato').innerHTML =`
    <div>
       <h4 class="text-danger">Tu</h4>
       <p class="pt-4">${numeroGiocatore}</p>    
    </div>
    <div class="ps-5" >
       <h4 class="text-danger">Computer</h4>
       <p class="pt-4">${numeroComputer}</p>    
    </div>
    `;
    document.getElementById ('vincitore').innerHTML =`
    <div>
       <h4 class="text-danger">Hai vinto!</h4>    
    </div>
    `;

} else {
    document.getElementById ('risultato').innerHTML =`
    <div>
       <h4 class="text-danger">Tu</h4>
       <p class="pt-4">${numeroGiocatore}</p>    
    </div>
    <div class="ps-5" >
       <h4 class="text-danger">Computer</h4>
       <p class="pt-4">${numeroComputer}</p>    
    </div>
    `;
    document.getElementById ('vincitore').innerHTML =`
    <div>
       <h4 class="text-danger">hai perso!</h4>    
    </div>
    `;
}

