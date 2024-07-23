
// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate multiplication table with prime marking
function generateMultiplicationTable(size) {
    let table = [];

    // Generate the multiplication table
    for (let i = 1; i <= size; i++) {
        let row = [];
        for (let j = 1; j <= size; j++) {
            let product = i * j;
            if (isPrime(product)) {
                row.push(`[${product}]`); // Mark prime numbers
            } else {
                row.push(product);
            }
        }
        table.push(row);
    }

    // Print the multiplication table
    for (let i = 0; i < table.length; i++) {
        console.log(table[i].join('\t'));
    }
}

// Generate a 10x10 multiplication table
generateMultiplicationTable(10);
