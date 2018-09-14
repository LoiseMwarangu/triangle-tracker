function triangle() {
  var a = document.getElementById("num1").value;
  var b = document.getElementById("num2").value;
  var c = document.getElementById("num3").value;
  var display = document.getElementById("display");
  if(a + b > c && b + c > a && c + a > b) {
    if(a === b && b === c && c === a) {
      display.textContent = "Equilateral";
    } else if(a === b || a === c || b === c) {
      display.textContent = "Isosceles";
    } else {
      display.textContent === "Scalene";
    }
  } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    display.textContent = "Invalid"
  } else {
    display.textContent = "Not a triangle";
  }
}
