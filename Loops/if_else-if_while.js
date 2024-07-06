// A very simpel js program which will execute whether the given number is positive negative or zero


  
  let inputs = [-3, -1, 0, 5]; // Example inputs
    let inputIndex = 0;
      let number;

     do {
    
    inputIndex++;

      console.log(`Input: ${number}`);

        if (number > 0) {
         console.log("You entered a positive number:", number);
         } else if (number < 0) {
           console.log("You entered a negative number:", number);
         } else {
          console.log("You entered zero. Please enter a positive number.");
         }
            } while (number <= 0);
