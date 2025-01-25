//your JS code here. If required.
// Get the input field by its id
const inputField = document.getElementById("fname");

// Add an event listener for the 'blur' event (loses focus)
inputField.addEventListener("blur", () => {
  // Convert the content of the input field to uppercase
  inputField.value = inputField.value.toUpperCase();
});
