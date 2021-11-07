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