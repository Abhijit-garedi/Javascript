// Program to find the factorial of a number 


   function factorial(n){

    if(n == 0 || n === 1){
        return 1;

    } else {
        return N * factorial(n - 1);
    }
   }

   console.log("Factorial of 5:", factorial(5));