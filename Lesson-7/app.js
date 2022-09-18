// Conditional and logic

// > < >= <= == !=

// Strict equal: compare by type
// and value === !==

// Logic
// AND && true if both side is true
// OR || true if one side is true
// NOT ! true => false, false => true

let today = "sunday";

// today != "sunday"
if (!(today == "sunday")) {
    // Only run if true
    console.log("Party!");
}

console.log("Outside if");

let age = 17;
let money = 900;
console.log("age", age);
console.log("money", money);
console.log(age > 18 || money > 500);

if (age > 18 || money > 500) {
    console.log("you can enter the bar");
}

let username = "admin1";
let password = "admin1";
// if (username == "admin" && password == "admin"){
//     console.log("Hello admin!");
// }else {
//     console.log("Wrong username or password");
// }
if (username == "admin" 
    && password == "admin") {
    
    console.log("Hello admin");

} else if (username != "admin") {
    console.log("wrong username");

} else if (password != "admin") {
    console.log("Wrong password");

} else {
    // Always at the end
    // run if nothing is true
    console.log("Wrong username and password");
}

let myName = "Quan";
switch (myName) {
    case "Trung":
        console.log("Hello Trung");
        break;

    case "Nam":
        console.log("What's up Nam");
        break;

    case "Linh":
        console.log("Hello Linh");
        // fallthrough
    case "Mai":
        console.log("Hello Mai");
    default:
        // always at the end
        console.log("I don't know you");
        break;
}
// % modulo
// ** to the power of
// e: exponent


// Input: a number
// check if the number is odd or even
// let number = parseInt(prompt("Enter a number"));
// console.log(number);
// if (isNaN(number)) {
//     alert("Invalid input");
// } else if (number % 2 == 0){
//     alert(`${number} is even`)
// } else {
//     alert(`${number} is odd`);
// }

// enter a, b, c
// solve quadratic equation of ax^2 + bx + c
let a = Number(prompt("a = "));
let b = Number(prompt("b = "));
let c = Number(prompt("c = "));

let delta = b**2 - 4 * a * c;

if (delta < 0) {
    console.log("No solution");
} else if (delta == 0) {
    console.log("one solution");
    let x = -b / (2 * a);
    console.log(x);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(x1, x2);
}
