//  makes a variable to determine what column the div ends up in
let column = 0;

// Create an object to store the menu states for each instance of x
const menuStates = {};

//  a method for displaying the infoMenu
HTMLElement.prototype.showInfo = function(x) {
  // check if menuOpen is defined for the current instance of x
  if (!menuStates.hasOwnProperty(x)) {
    // if not defined, set it as true
    menuStates[x] = true;
  }

  // get the menu state for the current instance of x
  const menuOpen = menuStates[x];

  // executable code here

  // if menu is open
  if (menuOpen) {
    document.getElementById("info" + x).style.opacity = "1";
    let menu = document.getElementById("menu" + x);
    menu.style.bottom = "unset";
    menu.style.top = "0";
    menu.style.backgroundColor = "transparent";
    menu.innerHTML = "<";
    menuStates[x] = false; // update the menu state
  } else {
    document.getElementById("info" + x).style.opacity = "0";
    let menu = document.getElementById("menu" + x);
    menu.style.bottom = "0";
    menu.style.top = "unset";
    menu.style.backgroundColor = "rgba(0, 0, 0, .5)";
    menu.innerHTML = "&ctdot;";
    menuStates[x] = true; // update the menu state
  }
};

function buttonEvent(x) {
  var button = document.getElementById("menu" + x);

  button.addEventListener('click', function() {
    button.showInfo(x);
  });
}

//  runs for every varible in array, placing one object inside every container
for (var x = 0; x < photoCol.length; x++) {

    //  seperates the divs into columns
    column++;
    if (column == 4) {
        column = 1;
    }

    //  makes a div to store items
    const div = document.createElement("div");
    div.setAttribute("class", "work");
    div.setAttribute("id", "work" + x);
    document.getElementById("column" + column).appendChild(div);

    //  makes a img 
    const img = document.createElement("img");
    img.src = "../collections/photos/" + photoCol.slice(-x)[0][2];
    document.getElementById("work" + x).appendChild(img);

    //  makes a menu
    const menu = document.createElement("p");
    menu.innerHTML = "&ctdot;";
    menu.setAttribute("class", "workMenu");
    menu.setAttribute("id", "menu" + x);
    document.getElementById("work" + x).appendChild(menu);

    //  makes a div that shows on menu click
    const infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "infoDiv");
    infoDiv.setAttribute("id", "info" + x);
    document.getElementById("work" + x).appendChild(infoDiv);

    //  makes a title inside infoDiv
    const title = document.createElement("p");
    title.innerHTML = photoCol.slice(-x)[0][0];
    title.setAttribute("class", "workTitle infoElem");
    document.getElementById("info" + x).appendChild(title);

    //  makes a small text inside infoDiv
    const text = document.createElement("p");
    text.innerHTML = photoCol.slice(-x)[0][3];
    text.setAttribute("class", "workText infoElem");
    document.getElementById("info" + x).appendChild(text);

    //  executes the method 
    buttonEvent(x);
};