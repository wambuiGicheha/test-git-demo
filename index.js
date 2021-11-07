function sum(a,b){
  return a + b;
}

const mysum = sum(3,4);
console.log('mysum', mysum);

function subtract(a,b){
  if (a==='' || b===''){
    return 'Parameter can not be empty';
  }
  return a - b;
}

const mysub = subtract(11,4);
console.log('mysub', mysub);

function divide(a,b){

  return (a / b);

}

const mydiv = divide(10,2);
console.log('mydiv', mydiv);
function multiply(a,b){
  return a * b;
}
const mymul = multiply(11,4);
console.log('mymul', mymul);

function modulus(a,b){

  return (a % b);

}
const mymod = modulus(11,2);
console.log('mymod', mymod);



