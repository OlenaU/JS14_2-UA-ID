
//let id = 2883616949; 

const maincheck  = [-1, 5, 7, 9, 4, 6, 10, 5, 7];

function IDcheck(){
  let inputcode = document.getElementById('xvar').value.split("")
  console.log(inputcode);

let result = 0;
for (let i = 0; i < inputcode.length - 1; i++) {
  result += (inputcode[i] * maincheck[i]);
}

let ControlNumber = result - (Math.floor(result / 11) * 11);
console.dir(ControlNumber);

if (ControlNumber == inputcode[9]) {
  
  let gender = inputcode[8] % 2 == 0 ? 'female' : 'male';
  console.log (gender);
  let startday = new Date(1899, 12, 31);
  startday.setDate(inputcode.splice(0, 5).join(""));
  
  let now = new Date();
  let diff = 0;
  diff = now.getFullYear() - startday.getFullYear();
  

  if (now.getMonth() < startday.getMonth()) 
  {
      console.log(diff -= 1);
  }
  else if (now.getMonth() == startday.getMonth()) 
  {
      if (now.getDate() < startday.getDate()) 
      {
          console.log(diff -= 1);
      }
  }

  return alert(`The ID is valid. The Birtdate of ID owner is ${startday}.The full age is ${diff}. The Gender is ${gender} ` ); //
}
else {
return alert(`The ID is not valid`);

}

}

