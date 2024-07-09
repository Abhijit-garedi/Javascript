  

   // jS program to remove duplicates from Array;

   let arr = [1, 2, 3, 1, 2, 4, 5];
   let uniqueArr = [...new Set(arr)];
   console.log(uniqueArr); 
   
    // Output: [1, 2, 3, 4, 5]
   