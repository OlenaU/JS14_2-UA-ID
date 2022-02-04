
//let id = 2883616949; 
const maincheck  = [-1, 5, 7, 9, 4, 6, 10, 5, 7];
const date_time = {
  timezone: 'UTC',
  year: 'numeric',
    month: 'long',
    day: 'numeric',
};

function IDcheck(){

let inputcode = document.getElementById('xvar').value.split("");

let result = 0;
for (let i=0; i < inputcode.length - 1; i++) {
  result += (inputcode[i] * maincheck[i]);
}
let ControlNumber = result - (Math.floor(result / 11) * 11);
console.dir(ControlNumber);

if (ControlNumber != inputcode[9]) {
  return alert('Введенный вами ИНН некорректен');
} else
return alert('Введенный вами ИНН корректен');
}



//const BD = id.splice(4);
//console.dir(BD);

//let StartDate = (1899, 12, 31, 0, 0, 0);

//
//let checkBD = 
//let checksex = 
//console.log(arrid);
