//  runs for every varible in array, placing one object inside every container
for (var x = 0; x < updateCol.length; x++) {

    //  makes a div to store items
    const div = document.createElement("div");
    div.setAttribute("class", "updateCont");
    div.setAttribute("id", "update" + x);
    document.getElementById("content").appendChild(div);

    //  makes a date
    const date = document.createElement("p");
    date.setAttribute("class", "updateDate");
    date.innerHTML = updateCol.slice(-x)[0][0];
    document.getElementById("update" + x).appendChild(date);

    //  makes a line
    const line = document.createElement("hr");
    document.getElementById("update" + x).appendChild(line);

    //  makes a title
    const title = document.createElement("p");
    title.innerHTML = updateCol.slice(-x)[0][1];
    title.setAttribute("class", "updateTitle");
    document.getElementById("update" + x).appendChild(title);

    //  makes a text
    const text = document.createElement("p");
    text.innerHTML = updateCol.slice(-x)[0][2];
    text.setAttribute("class", "updateText");
    document.getElementById("update" + x).appendChild(text);
};