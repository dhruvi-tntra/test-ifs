function greet() {
  alert("Hello! You just clicked the button!");
  console.log("Button clicked!");
  document.body.style.backgroundColor = "lightblue";
  document.body.style.color = "white";
  document.body.style.fontFamily = "Arial, sans-serif";
  document.body.style.padding = "20px";
  document.body.style.textAlign = "center";
  document.body.style.transition = "background-color 0.5s ease";
  document.body.innerHTML += "<p>Enjoy the new look!</p>";
}
