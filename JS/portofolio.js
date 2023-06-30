//  makes a variable to determine what column the div ends up in
let column = 0;

//  a method for displaying the infoMenu
HTMLElement.prototype.showInfo = function(x) {
    //  executable code here

    //  determines the menu boolean
    var menuOpen = true;

    //  if menu is open
    if (menuOpen) {
        document.getElementById("info" + x).style.opacity = "1";
        let menu = document.getElementById("menu" + x);
        menu.style.bottom = "unset";
        menu.style.top = "0";
        menu.style.padding = "5px 14px";
        menu.innerHTML = "<";
        menuOpen = false;
    }
    else {
        document.getElementById("info" + x).style.opacity = "0";
        let menu = document.getElementById("menu" + x);
        menu.style.bottom = "0";
        menu.style.top = "unset";
        menu.style.padding = "";
        menu.innerHTML = "&ctdot;";
        menuOpen = true;
    }
  };
  
  function buttonEvent(x) {
    var button = document.getElementById("menu" + x);
  
    button.addEventListener('click', function() {
      button.showInfo(x);
    });
  }

//  runs for every varible in array, placing one object inside every container
for (var x = 0; x < workCol.length; x++) {

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
    img.src = "../collections/portofolio/" + workCol.slice(-x)[0][2];
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
    title.innerHTML = workCol.slice(-x)[0][0];
    title.setAttribute("class", "workTitle infoElem");
    document.getElementById("info" + x).appendChild(title);

    //  makes a small text inside infoDiv
    const text = document.createElement("p");
    text.innerHTML = workCol.slice(-x)[0][3];
    text.setAttribute("class", "workText infoElem");
    document.getElementById("info" + x).appendChild(text);

    //  makes a small text inside infoDiv
    const link = document.createElement("a");
    link.innerHTML = "Link";
    link.href = "../collections/portofolio/files/" + workCol.slice(-x)[0][4];
    link.setAttribute("class", "workLink infoElem");
    document.getElementById("info" + x).appendChild(link);

    //  executes the method 
    buttonEvent(x);
};