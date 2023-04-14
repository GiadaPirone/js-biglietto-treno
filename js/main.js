function myFunction(){

//prezzo per km del biglietto
let prezzoPerKm = 0.21;
let chilometri = prompt ("inserisci i km che devi percorrere");
let età = prompt ( "inserisci la tua età");
let prezzoBiglietto = prezzoPerKm * chilometri;


//il passeggero ha < 18 anni
if (età < 18){
    prezzoBigliettoSconto = prezzoBiglietto - (prezzoBiglietto * 20 /100);
    alert ("hai avuto uno sconto del 20%")

} else if (età > 65){
    prezzoBigliettoSconto = prezzoBiglietto -(prezzoBiglietto *20 /100);
    alert ("hai avuto uno sconto del 40%")
}

else{
    prezzoBiglietto;
}

document.getElementById("demo").innerText = prezzoBiglietto.toFixed(2);
document.getElementById("demo").innerText = prezzoBigliettoSconto.toFixed(2);


}
  



    
