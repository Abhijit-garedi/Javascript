 

   // JS program to check if a number is prime;

   function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
  }
   console.log(isPrime(7)); 