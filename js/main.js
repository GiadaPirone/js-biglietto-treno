//prezzo per km del biglietto
let prezzoPerKm = 0.21;
let chilometri = prompt ("inserisci i km che devi percorrere");
let età = prompt ( "inserisci la tua età");

let prezzoBiglietto = prezzoPerKm * chilometri;


//il passeggero ha < 18 anni
if (età < 18){
    prezzoBigliettoSconto = prezzoBiglietto - (prezzoBiglietto * 20 /100);
    alert ("hai avuto uno sconto del 20%")
} 
// il passeggero ha + o = 18 anni
if( età==18 ||età>18){
    alert ("pagherai il biglietto a prezzo intero");
    document.getElementById("prezzoFinale").innerText = prezzoBiglietto.toFixed(2);
}


//il passeggero ha >65 anni
if ( età > 65){
    prezzoBigliettoSconto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
    alert ("hai avuto uno sconto del 40%")
} 
// il passeggero ha > o = 18 anni
if( età ==65 || età < 65){
    document.getElementById("prezzoFinale").innerText = prezzoBiglietto.toFixed(2);
}

document.getElementById("prezzoFinale").innerText = prezzoBigliettoSconto.toFixed(2);


  



    
