// Button text changed to "Click Here"
const myButton = document.querySelector("button");
myButton.textContent = "Click Here";

// Event for button when clicked to display an alert
document.querySelector("button").addEventListener("click", function () {
    alert("Hello World!");
  });
  