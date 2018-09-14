function triangle() {
  var display = document.getElementById("display");
  var sideA = document.getElementById("num1").value;
  var sideB = document.getElementById("num2").value;
  var sideC = document.getElementById("num3").value;
  track(sideA, sideB, sideC);
}


function track(a,b,c) {
  if(a+b<=c || b+c<=a || c+a<=b) {
    display.textContent = "not a triangle";
  } else if(isNaN(a) || isNaN(b) || isNaN(c) ){
    display.textContent = "Invalid number";
    } else {
    if(a === b && a === c) {
      display.textContent = "Equilateral Triangle";
    } else if(a === b || b === c || a === c) {
      display.textContent = "Isosceles Triangle";
    } else {
      display.textContent = "Scalene Triangle";
    }
  }
}
