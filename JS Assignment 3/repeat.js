function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
    }
    return num;
}
console.log(repeatedSum(456)); // 6