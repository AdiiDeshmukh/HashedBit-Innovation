function sumOfProductOfDigits(n1, n2) {
  let s1 = n1.toString();
  let s2 = n2.toString();

  while (s1.length < s2.length) s1 = '0' + s1;
  while (s2.length < s1.length) s2 = '0' + s2;

  let totalSum = 0;

  for (let i = 0; i < s1.length; i++) {
    totalSum += parseInt(s1[i]) * parseInt(s2[i]);
  }

  return totalSum;
}

console.log(sumOfProductOfDigits(6, 34));