//  makes a variable to determine what column the div ends up in
let column = 0;

//  runs for every varible in array
for (var x = 0; x < workCol.length; x++) {

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
}