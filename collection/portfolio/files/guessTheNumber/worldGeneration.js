function generateWorld() {

    //  sets the tile id variable
    let tileId = 0;

    //  generate world
    for (var x = 0; x < 10; x++) {

        //  makes a table row to store table data
        const tablerow = document.createElement("tr");
        tablerow.setAttribute("id", "tr" + x);
        document.getElementById("map").appendChild(tablerow);

        for (let y = 0; y < 10; y++) {
            
            //  generates map
            createTiles();
        }
    }

    function createTiles() {
        //  increases the tile id based on number of tiles
        tileId++;

        //  makes a tableData to store image
        const tableData = document.createElement("td");
        tableData.setAttribute("id", "td" + tileId);

        //  gives the tableData a custom click function
        tableData.setAttribute("onclick", "guess(" + tileId + ")");

        //  generates the tableData
        document.getElementById("tr" + x).appendChild(tableData);

        //  creates a paragraph object
        const tileNumber = document.createElement("p");

        tileNumber.innerHTML = tileId;

        //  gives the object id and class
        tileNumber.setAttribute("id", "tile" + tileId);
        tileNumber.setAttribute("class", "tile center");

        //  generates the tile
        document.getElementById("td" + tileId).appendChild((tileNumber));
    }
}