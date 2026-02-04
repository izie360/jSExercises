let num = 13;

function factorialCalculator (num){
  let result =1;

  for(let count=2;count<=num;count++){

    result = result*count;
  }

  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
