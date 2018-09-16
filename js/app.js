function triangle() {
  //create an array to store the sides
  var sides = [];
  //push all the sides into the array
  sides.push(document.getElementById("num1").value);
  sides.push(document.getElementById("num2").value);
  sides.push(document.getElementById("num3").value);
  //assign the values of the array to variables a,b,c
  var [a,b,c] = sides;
  var display = document.getElementById("display");
  if(a.length === 0 || b.length === 0 || c.length === 0 ) {
    //check whether the user has typed something
    display.innerHTML = "<p>Please <span class='plea'>TYPE</span> something</p>" 
  } else {
    //convert the strings to numbers
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    //track the triangle
    track(a,b,c);
  }
}
function track(a,b,c) {
  if(a + b > c && b + c > a && c + a > b) {
    if(a === b && a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Equilateral</span> triangle"
    } 
    else if(a === b || b === c || a === c) {
      display.innerHTML = "<p class='display-text'>That is an <span class='type'>Isosceles</span> triangle"
    } 
    else {
      display.innerHTML = "<p class='display-text'>That is a <span class='type'>Scalene</span> triangle"
    } 
  } 
  else if(isNaN(a) || isNaN(b) || isNaN(c)) {
      display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a number</p>";
  } 
  else {
    display.innerHTML = "<p class='display-text'>That is <span class='not'>NOT</span> a triangle"
  }
}

function reset() {
  location.reload();
}