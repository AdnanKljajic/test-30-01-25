/*Napiši funkciju obrniString(tekst) koja prima string i vraća isti string obrnut koristeći petlju(HOF).

	Ulaz: 

	console.log(obrniString("programiranje"));
console.log(obrniString("javascript"));

Izlaz: 

"ejranimargorp"
"tpircsavaj"
*/

function reverseWords(word){
   return word.split("").reverse().join("");        //reverse, not sort
   }

   let primjer1 = "programiranje";
   let primjer2 = "javascript";
   let primjer3 = "anavolimilovana";
   console.log(reverseWords(primjer1));
   console.log(reverseWords(primjer2));
   console.log(reverseWords(primjer3));
