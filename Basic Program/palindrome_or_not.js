// simple program to check whether given number is palindrome or not 

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log("Is 'radar' a palindrome?", isPalindrome('radar')); 