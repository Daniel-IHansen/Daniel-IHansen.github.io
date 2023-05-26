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

//  defines map
var map = [
    [8,1,1,1,1,1,8,1,1,5],
    [4,0,0,0,0,0,12,0,0,2],
    [4,0,0,0,0,0,4,0,0,2],
    [4,0,0,0,0,0,4,0,0,2],
    [8,1,9,1,1,1,4,0,0,2],
    [4,0,0,0,0,0,4,0,0,2],
    [4,0,0,0,0,0,8,1,9,5],
    [4,0,0,0,0,0,12,0,0,2],
    [4,0,0,0,0,0,4,0,0,2],
    [7,3,3,3,3,3,7,3,3,6]
  ]

//  sets the tile id variable
let tileId = 0;

//  generate world
for (var x = 0; x < 10; x++) {

    //  makes a tr to store td
    const tr = document.createElement("tr");
    tr.setAttribute("id","tr" + x);
    document.getElementById("map").appendChild(tr);

    for (let y = 0; y < 10; y++) {
        //  defines the current tile
        curTile = map[x][y];

        //  generaties a fresh tile
        createTile(curTile);

        //  generates a fitting hitbox
        createHitbox(curTile);
    }
}

function createTile(setTile){
    //  increases the tile id based on number of tiles
    tileId++;

    //  makes a td to store image
    const td = document.createElement("td");
    td.setAttribute("id","td" + tileId);
    document.getElementById("tr" + x).appendChild(td);

    //  creates a image object
    const tile = document.createElement("img");

    tile.setAttribute("src", ".media/tiles/tile" + setTile + ".png");

    //  gives the object id and class
    tile.setAttribute("id","tile" + tileId);
    tile.setAttribute("class","tile");

    //  generates the tile
    document.getElementById("td" + tileId).appendChild((tile));
}

function createHitbox(setTile){
    //  generates a hitbox element
    const hitbox = document.createElement("div");

    //  gives the hitbox a class
    hitbox.setAttribute("class", "hitbox");
  
    if (setTile = 1) {
        
    }
    else if (setTile = 2){
        
    }
    else if (setTile = 3){
        
    }
    else if (setTile = 4){
        
    }
    else if (setTile = 5){
        
    }
    else if (setTile = 6){
        
    }
    else if (setTile = 7){
        
    }
    else if (setTile = 8){
        
    }

    //  displays the hitbox element
    document.getElementById("mapHitbox").appendChild(hitbox);
  }