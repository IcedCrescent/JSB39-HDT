const button = document.getElementById("my-button");
const heading = document.getElementById("heading");

document.getElementsByTagName("")

heading.addEventListener("mouseout", function() {
    console.log("mouse out h1");
});

heading.addEventListener("mouseover", function() {
    console.log("mouse over h1");
});
console.log(button.innerText);
console.log(button.innerHTML);

let count = 0;
button.addEventListener("click", function() {
    // Do someting when clicked
    if (count > 10) {
        alert("STOP!");
        // exit the function
        return;
    }
    count++;
    heading.innerText = count;
});

button.addEventListener("mouseover", function() {
    console.log("hover over button");
})

