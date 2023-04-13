//prezzo per km del biglietto
let prezzoPerKm = 0.21;
let chilometri = prompt ("inserisci i km che devi percorrere");
let età = prompt ( "inserisci la tua età");

let prezzoBiglietto = prezzoPerKm * chilometri;



if (età < 18){
    prezzoBigliettoSconto = prezzoBiglietto - (prezzoBiglietto * 20 /100);
    alert ("hai avuto uno sconto del 20%")
}



if ( età > 65){
    prezzoBigliettoSconto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    alert ("hai avuto uno sconto del 40%")
}

document.getElementById("prezzoFinale").innerText = prezzoBigliettoSconto;

  



    
