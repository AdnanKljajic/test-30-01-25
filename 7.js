/*Napiši funkciju jePalindrom(niz), koja provjerava da li se niz čita isto sprijeda i straga.

	Ulaz: 
	
console.log(jePalindrom([1, 2, 3, 2, 1]));
console.log(jePalindrom([1, 2, 3, 4, 5]));

	Izlaz: 
	
true
false
*/



function jePalindrom(niz){
    let origNiz = niz.slice();
    let obrnutiNiz = niz.slice().reverse();
    
    if(origNiz.toString() === obrnutiNiz.toString()){
        return "True";
    }
    else {
        return "False";
    }
}
const niz1 = [1, 2, 3, 2, 1];
const niz2 = [1, 2, 3, 4, 5];
console.log(jePalindrom(niz1));
console.log(jePalindrom(niz2));
