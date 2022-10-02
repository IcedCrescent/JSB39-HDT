

// Primitive data types
let str = "str";
let num = 1;
let bool = true;

// refererence types
let arr = [1, 2, 3, 4];

// object (key-value pair)
// C#, Python Dictionary
// Java HashMap

let student1 = {
    name: "Trung",
    age: 24,
    "grades": [10, 8],
    height: {
        metric: 1.83,
        feet: 6
    },
    1: 2
}

console.log(student1);
console.log(student1.name);
console.log(student1["age"]);

student1.newKey = "new key";
student1.name = "Huy";
console.log(student1);

student1["newerKey"] = 10;
console.log(student1.newerKey);
// chaining
console.log(student1.height.feet)
console.log(student1["grades"][1])

delete student1["1"]
console.log(student1);

// Loop through all keys
for (const key in student1) {
    console.log(key, student1[key]);
}

console.log(student1.hasOwnProperty("age"));
console.log(student1.hasOwnProperty("age1"));