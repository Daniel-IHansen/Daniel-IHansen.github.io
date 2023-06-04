// 0 = Tile
// 1 = top wall
// 2 = right wall
// 3 = bottom wall
// 4 = left wall
// 5 = top-right corner wall
// 6 = bottom-right corner wall
// 7 = bottom-left corner wall
// 8 = top-left corner wall
// 9 = top door
// 10 = right door
// 11 = bottom door
// 12 = left door

//  defines map through arrays
var map = [
    [8, 1, 1, 1, 1, 1, 8, 1, 1, 5],
    [4, 0, 0, 0, 0, 0, 12, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 4, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 4, 0, 0, 2],
    [8, 1, 9, 1, 1, 1, 4, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 4, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 8, 1, 9, 5],
    [4, 0, 0, 0, 0, 0, 12, 0, 0, 2],
    [4, 0, 0, 0, 0, 0, 4, 0, 0, 2],
    [7, 3, 3, 3, 3, 3, 7, 3, 3, 6]
]

//  sets the tile id and hitbox2 id variable
let tileId = -1;
let hitboxId = -1;
let hitbox2Id = -1;

//  generate world
for (var x = 0; x < 10; x++) {

    //  makes a tr to store tableData
    const tablerow = document.createElement("tr");
    tablerow.setAttribute("id", "tr" + x);
    document.getElementById("map").appendChild(tablerow);

    for (let y = 0; y < 10; y++) {
        //  defines the current tile
        currentTile = map[x][y];

        //  generaties a fresh tile
        createTile(currentTile);
    }
}
console.log("[World generation]: " + (tileId + 1) + " tiles loaded.")
console.log("[World generation]: " + document.getElementsByClassName("hitbox").length + " hitboxes loaded.")

function createTile(setTile) {
    //  increases the tile id based on number of tiles
    tileId++;

    //  makes a tableData to store image
    const tableData = document.createElement("td"); // td: table data
    tableData.setAttribute("id", "td" + tileId);
    document.getElementById("tr" + x).appendChild(tableData);

    //  creates a image object
    const tile = document.createElement("img");

    tile.setAttribute("src", ".media/tiles/tile" + setTile + ".png");

    //  gives the object id and class
    tile.setAttribute("id", "tile" + tileId);
    tile.setAttribute("class", "tile");

    //  generates the tile
    document.getElementById("td" + tileId).appendChild((tile));
}

let player = new Player("player") // creating an instance of player
player.draw(10, 100)

