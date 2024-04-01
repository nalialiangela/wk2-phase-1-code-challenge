function isPrime(number) {
    // 2 is the 1st prime number so anything below that is not a prime number
  if (number < 2) {
    return false;
  }
//   2 will be like our first index (just like 0) and our loop will iterate between 2 and the number provided
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {   // if any of the numbers divide the given even number(2) then they are not prime numbers
      return false;
    }
  }
//   If no such divisor is found,return true meaning it is a prime number.
  return true;  
}
// filterPrimeNumber takes in an array of numbers and filters out the prime numbers using the isPrime function. 
function filterPrimeNumber(array) {
  return array.filter((number) => isPrime(number));   // It returns a new array containing only the prime numbers.
}

questionArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumber(questionArray);
console.log(primeNumbers);
