// 0 = null
// 1 = full wall
// 2 = top wall
// 3 = right wall
// 4 = bottom wall
// 5 = left wall
// 6 = top-right corner wall
// 7 = bottom-right corner wall
// 8 = bottom-left corner wall
// 9 = top-left corner wall
// 10 = top-left to bottom-right diagonal wall
// 11 = small wall

//  defines map
var map = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,9,5,5,8,5,5,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,6,0,3,4,0,0,1,11,0],
    [0,2,0,4,4,3,3,0,0,0],
    [0,2,0,9,0,8,0,0,11,0],
    [0,10,0,0,0,0,0,11,1,0],
    [0,0,10,6,3,7,0,0,1,0],
    [0,0,10,6,3,7,0,0,1,0],
    [1,0,0,0,0,0,0,0,0,0]
  ]

//  generate world
for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
        //  defines the current tile
        curTile = map[x][y];
        //  sets the position tile
        curTilePosX = 60*x;
        curTilePosY = 60*y;
        
        createTile(curTile, x, y);
    }
}

function createTile(tileType, tileX, tileY){
    
}