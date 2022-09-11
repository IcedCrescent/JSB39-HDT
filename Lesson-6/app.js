// Array


// Can contains multiple values
let classScore = [9, 10, 7, 8];

// Read
console.log(classScore)
console.log(`Array has ${classScore.length} elements`);

console.log(`First element: ${classScore[0]}`)
console.log(`Before last: ${classScore[classScore.length - 2]}`)

// slice(start, end?): from start to end
// 1 arg: from start to the end
console.log(classScore.slice(2))
// 2 args: from start, to before end
console.log(classScore.slice(1, 3))

// Update
classScore[2] = 10;
console.log(classScore)
 
// Add new element
classScore.push(7);
console.log(classScore)
classScore.push(5, 6);
console.log(classScore)

// Delete
// splice(startIndex, deleteCount?)
// 1 args: delete from startIndex to end
classScore.splice(6);
console.log(classScore)
// 2 args: delete from startIndex, delete n elements
let deletedElements = classScore.splice(2, 3);
console.log(classScore);

console.log(`Deleted: ${deletedElements}`);

// Loop
for(let i = 0; i <= 10; i++){
    // Loop body
    console.log(i);
}

// 10 => 1
for(let i = 10; i >= 1; i = i - 1) {
    console.log(i);
}
console.log("----")
let sum = 0;
for (let index = 0; index < classScore.length; index++) {
    sum += classScore[index];
}

console.log(`Total ${sum}`)
let avg = sum / classScore.length;
console.log(`Average: ${avg}`)
// Sum 

// Avg