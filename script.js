const myButton = document.getElementById("greetingButton");
const outputText = document.getElementById("outputText");

myButton.addEventListener("click", () => {
  outputText.textContent = "Hello, welcome to my first webpage!";
  outputText.style.color = "#27ae60"; // Change text color to a shade of green
  outputText.style.fontWeight = "bold"; // Make the text bold
});
