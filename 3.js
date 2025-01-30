/*Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.


Primjer:
Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
Izlaz: [“attention”, “attend”]
*/

function returnChosen(arr, pocetak){
    const prefixovaneRijeci = [];
    arr.forEach(function(rijec){
        if (rijec.startsWith(pocetak)){
            prefixovaneRijeci.push(rijec);
        }
    });
    return prefixovaneRijeci;
}


const words = ["pay","attention","practice","attend", "attack", "atol", "medonja"]; //dodane zadnje tri rijeci za testiranje
const prefix = ["at"];
console.log(returnChosen(words, prefix));