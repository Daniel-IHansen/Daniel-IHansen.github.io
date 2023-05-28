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

//  sets the tile id and hitbox2 id variable
let tileId = -1;
let hitboxId = -1;
let hitbox2Id = -1;

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
console.log("[World generation]: " + (tileId + 1) + " tiles loaded.")
console.log("[World generation]: " + document.getElementsByClassName("hitbox").length + " hitboxes loaded.")

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

    if (setTile > 0) {

        //  increases the tile id based on number of tiles
        hitboxId++;
        
        //  generates a hitbox element
        const hitbox = document.createElement("div");

        //  gives the hitbox a class and id
        hitbox.setAttribute("class", "hitbox");
        hitbox.setAttribute("id","hitbox" + hitboxId);
    
        //  sets common lengths
        let longSide = "80px";
        let shortSide = "30px";

        //  adjusts the height, width, rotation and position of hitbox
        if (setTile == 1) {
            hitbox.style.height = shortSide;
            hitbox.style.width = longSide;
        }
        else if (setTile == 2){
            hitbox.style.height = longSide;
            hitbox.style.width = shortSide;
            hitbox.style.left = getAttributesById("tile0").width/1.6 + "px";
        }
        else if (setTile == 3){
            hitbox.style.height = shortSide;
            hitbox.style.width = longSide;
            hitbox.style.top = getAttributesById("tile0").width/1.6 + "px";
        }
        else if (setTile == 4){
            hitbox.style.height = longSide;
            hitbox.style.width = shortSide;
        }
        else if (setTile >= 5){
            //  generates a secondary hitbox element
            const hitbox2 = document.createElement("div");

            //  gives the second hitbox a class
            hitbox2.setAttribute("class", "hitbox2");

            // //  increases the tile id based on number of tiles
            // hitbox2Id++;

            // hitbox2.setAttribute("id","hitbox");
            
            //  adjusts the height, width, rotation and position of secondary hitbox
            if (setTile == 5) {
                hitbox.style.height = shortSide;
                hitbox.style.width = longSide;

                hitbox2.style.height = longSide;
                hitbox2.style.width = shortSide;
                hitbox2.style.left = getAttributesById("tile0").width/1.6 + "px";
            }
            else if (setTile == 6){
                hitbox2.style.height = longSide;
                hitbox2.style.width = shortSide;
                hitbox2.style.left = getAttributesById("tile0").width/1.6 + "px";

                hitbox.style.height = shortSide;
                hitbox.style.width = longSide;
                hitbox.style.top = getAttributesById("tile0").width/1.6 + "px";
            }
            else if (setTile == 7){
                hitbox2.style.height = shortSide;
                hitbox2.style.width = longSide;
                hitbox2.style.top = getAttributesById("tile0").width/1.6 + "px";

                hitbox.style.height = longSide;
                hitbox.style.width = shortSide;
            }
            else if (setTile == 8){
                hitbox.style.height = longSide;
                hitbox.style.width = shortSide;

                hitbox2.style.height = shortSide;
                hitbox2.style.width = longSide;
            }

            //  displays the second hitbox element
            document.getElementById("td" + tileId).appendChild(hitbox2)
        }

        //  displays the hitbox element
        document.getElementById("td" + tileId).appendChild(hitbox);

    }
}