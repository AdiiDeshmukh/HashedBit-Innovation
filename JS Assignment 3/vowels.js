let myString = "JavaScript is an awesome language to learn"; 
let vowels = 0, consonants = 0;

for (let char of myString.toLowerCase()) {
    if (/[a-z]/.test(char)) { 
        if ('aeiou'.includes(char)) vowels++;
        else consonants++;
    }
}
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);