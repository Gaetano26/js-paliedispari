/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


// constante per prendere il bottone invia
const btn = document.getElementById('invia');

 //evento al click sul bottonr invia
 btn.addEventListener('click', entra);

 //funzione per verificare se la parola  inserita è valida oppure no
 function entra () {
    let cerca = document.getElementById('invia').value;
    let parola = cerca;
    let carattere = '';
    let parolaInversa = '';
    const i = parola.length - 1;

    while (i >= 0) {
        carattere = parola[i];
        parolaInversa += carattere;
        i--;
    }
      
    //se la funzione è vera genera il testo + il bottone con il link per entrare nel gioco
    if (parola === parolaInversa ) {
        document.getElementById("inserisci").style.display = "none";
        document.querySelector(".container").innerHTML = `
               <div class="d-flex flex-column justify-content-center align-items-center">
                   <h1 class="text-danger">Non sei stato invitato : lascia la pagina!</h1>
               </div> 
        `;
      //se la funzione è falsa genera il testo è l'utente non può piu andare avanti
    } else {
        document.getElementById("inserisci").style.display = "none";
        document.querySelector(".container").innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center">
        <h1> Benvenuto! </h1>
       <button type="button" class="btn btn-success"><a class="text-white text-decoration-none fs-4" href="./dadi.html">Gioca</a></button>
      </div> 
    `;
    }

}