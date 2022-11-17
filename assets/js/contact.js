// Hamburger menu creation for smaller screen size

function hamburgerFunc() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// For Setting the Font size to Small
function smallFontSize() {
  var elements_c = document.getElementsByClassName("contact");
  var elements_b = document.getElementsByClassName("btn");

  for (var i = 0; i < elements_c.length; i++) {
    var element = elements_c[i];
    element.style.padding = "small";
    for (var i = 0; i < elements_b.length; i++) {
      var element = elements_b[i];
      element.style.fontSize = "small";
    }
  }
}
// For Setting the Font size to Medium
function mediumFontSize() {
  var elements_c = document.getElementsByClassName("contact");
  var elements_b = document.getElementsByClassName("btn");

  for (var i = 0; i < elements_c.length; i++) {
    var element = elements_c[i];
    element.style.padding = "medium";
  }
  for (var i = 0; i < elements_b.length; i++) {
    var element = elements_b[i];
    element.style.fontSize = "medium";
  }
}
// For Setting the Font size to Large
function largeFontSize() {
  var elements_c = document.getElementsByClassName("contact");
  var elements_b = document.getElementsByClassName("btn");

  for (var i = 0; i < elements_c.length; i++) {
    var element = elements_c[i];
    element.style.padding = "x-large";
  }
  for (var i = 0; i < elements_b.length; i++) {
    var element = elements_b[i];
    element.style.fontSize = "x-large";
  }
}
