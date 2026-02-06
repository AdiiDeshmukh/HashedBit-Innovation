const students = [
    { name: "Tushar", scores: [80, 70, 60] },
    { name: "Raj", scores: [80, 70, 90] },
    { name: "Aditya", scores: [60, 70, 80] },
    { name: "Keyur", scores: [90, 90, 80, 80] },
];

const output = students.map(student => {
    let sum = student.scores.reduce((acc, curr) => acc + curr, 0);
    return { name: student.name, average: sum / student.scores.length };
});
console.log(output);