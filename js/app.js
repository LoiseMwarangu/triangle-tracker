function triangle() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  var display = document.getElementById("display");
  track(a,b,c);
}
function track(a,b,c) {
  if(a + b > c && b + c > a && c + a > b) {
    if(a === b && a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Equilateral</span> Triangle"
    } else if(a === b || b === c || a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Isosceles</span> Triangle"
    } else {
      display.innerHTML = "<p class='display-text'>That is a <span class='type'>Scalene</span> Triangle"
    } 
  }else {
    display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a triangle"
  }
}

function reset() {
  location.reload()
}
