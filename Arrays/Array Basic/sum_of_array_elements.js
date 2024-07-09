

   // simple array elements program which will do sum of the list of 
   // array elements in basic forms 

     let arr = [1, 2, 3, 4, 5];
     let sum = arr.reduce((accumualator, currentValue) => accumualator + currentValue, 0);
     console.log(sum);