function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log(correctfn("I love Java", "Java", "JavaScript"));