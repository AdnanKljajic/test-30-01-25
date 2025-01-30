/*Napisi funkciju koja izbacuje svaki drugi najmanji element niza, i ubacuje u novi niz. Pretpostaviti da su elementi u nizu unikatni.
Primjer:
Ulaz: [5, 1, 9 , 3, 7 ,2]
Izlaz: [2, 5, 9]
*/

function secondLowest(arr){
 arr.sort(function(a,b){return a-b;});
 return arr[1]
};

const prviArr = [5, 1, 9 , 3, 7 ,2];
const drugiArr = [2, 5, 9];
console.log(secondLowest(prviArr));
console.log(secondLowest(drugiArr));