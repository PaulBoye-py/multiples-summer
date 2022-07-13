let arrayOfMultiples = [];
let arrayOfNumbers = [];
let sum = 0;
function solution(number){
  // Push the count of the number into an array
  for(let i = 0; i < number; i++){
    arrayOfNumbers.push(i)
  }

  // Check for the multiples of 3 or 5 in arrayOfNumbers and push them to arrayOfMultiples
  for(let j = 0; j < arrayOfNumbers.length; j++) {
    if (j % 3 === 0 || j % 5 === 0){
      arrayOfMultiples.push(arrayOfNumbers[j])
    } else if (j < 0) {
      return 0
    }
  }

//   Sum the values of arrayOfMultiples
  for (const value of arrayOfMultiples) {
    sum += value;
  }
  return sum
}

console.log(solution(10))
console.log(arrayOfMultiples)