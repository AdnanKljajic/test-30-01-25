/*Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable, a za ulaze -–x i x-– smanjuje vrijednost varijable za 1. Pocetna vrijednost je 0.

Primjer:
Ulaz: ["--X","X++","X++", “X++”]
Izlaz: 2
*/

function addSubtract(arr){
    let counter = 0;
    arr.forEach(function(pozitivaNegativa){
        if (pozitivaNegativa === "++X" || pozitivaNegativa === "X++"){
            counter++
        }
        else if (pozitivaNegativa === "--X" ||pozitivaNegativa === "X--"){
            counter--
        }
        })
        return counter;
    }
    
    let slucajeviX = ["--X","X++","X++", "X++", "++X", "X--"];
    let slucajeviY = ["++X", "X--", "--X"];
    console.log (addSubtract(slucajeviX));
    console.log (addSubtract(slucajeviY));