
// 1.Variable Scope
function scopeDemo() {
    if (true) {
        var variableVar = "I am function-scoped (var)";
        let variableLet = "I am block-scoped (let)";
        const variableConst = "I am block-scoped (const)";
        console.log("Inside the block:", variableLet, variableConst);
    }
    console.log("Outside the block:", variableVar); 
}
scopeDemo();


// 2.Array Access
const fruits = ["Apple", "Banana", "Orange", "Dragonfruit", "Blackberry"];

function getSecondFruit() {
    return fruits[1]; 
}
console.log("Second Fruit:", getSecondFruit());


// 3.Push and Pop
function modifyArray(arr) {
    let tempArray = [...arr];
    tempArray.push("Mango");
    tempArray.pop();
    return tempArray;
}
console.log("Modified Array:", modifyArray([1, 2, 3]));


// 4.Map(Squaring)
const myNumbers = [1, 2, 3, 4, 5, 6];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("Squared Numbers:", squareNumbers(myNumbers));


// 5.Filter(odd numbers)
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("Odd Numbers:", getOddNumbers(myNumbers));


// 6.Object Properties
const person = {
    name: "Aditya",
    age: 23,
    occupation: "Developer"
};

function greetPerson(obj) {
    console.log(`Greeting: Hello, my name is ${obj.name}. I am ${obj.age} and I work as a ${obj.occupation}.`);
}
greetPerson(person);


// 7.Rectangle Area
function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log("Area of 10x5 rectangle:", calculateArea({ width: 10, height: 5 }));


// 8.Object Keys
function getKeys(obj) {
    return Object.keys(obj);
}
console.log("Keys of Person object:", getKeys(person));


// 9.Merging Objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const jobInfo = { salary: "80k", remote: true };
console.log("Merged Object:", mergeObjects(person, jobInfo));


// 10.Reduce (Sum)
function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers:", calculateSum(myNumbers));