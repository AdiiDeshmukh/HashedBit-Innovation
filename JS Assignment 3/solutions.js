const states = ["Andhra Pradesh", "Bihar", "Goa", "Gujarat", "Uttar Pradesh", "Odisha"];
const result = states.filter(state => !'AEIOU'.includes(state[0].toUpperCase()));
console.log(result);