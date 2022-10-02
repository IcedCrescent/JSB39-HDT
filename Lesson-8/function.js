
let arr1 = [2, 3];
let arr2 = [3, 4, 5, 6];

let sum1 = 0;
for(let i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}
console.log(sum1);

let sum2 = 0;
for(let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
}
console.log(sum2);

/**
 * Take in an array, return the sum
 * @param {Array} arr array of number
 * @returns {Number} the sum
 */
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let result = sumOfArray(arr1);

function printTo10(){
    for (let i = 0; i < 10; i++){
        console.log(i + 1);
    }
}

/**
 * 
 * @param {*} arr 
 */
function productOfArray(arr) {

}

function add(a, b){
    return a + b;
}

function add2(a, b) {
    console.log(a + b);
}