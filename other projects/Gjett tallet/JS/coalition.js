function scoreCollide(player){

    let playerRectX =  getAttributesById(String("player" + player)).x;
    let playerRectY =  getAttributesById(String("player" + player)).y;
    let playerRectWidth = getAttributesById(String("player" + player)).width;
    let playerRectHeight = getAttributesById(String("player" + player)).height;

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
        
            let scoreBoxId = "slot-" + i + "-" + j;
            let scoreRectX = getAttributesById(scoreBoxId).x +20;
            let scoreRectY = getAttributesById(scoreBoxId).y +20;
            let scoreRectWidth = getAttributesById(scoreBoxId).width -40;
            let scoreRectHeight = getAttributesById(scoreBoxId).height -40;
        

            //will player collide with the score rectangle?
            if (scoreRectX + scoreRectWidth > playerRectX &&
                scoreRectX < playerRectX + playerRectWidth &&
                scoreRectY + scoreRectHeight > playerRectY &&
                scoreRectY < playerRectY + playerRectHeight
                ){
                    if (player == 1) {
                        board[i][j] = "X"
                        if (checkFtw() == true){
                            document.getElementById("title").innerHTML = "Green Win!"
                        }

                    document.getElementById(scoreBoxId).src = ".media/flagGreen.png";
                    }
                    else if (player == 2){
                        board[i][j] = "O"
                        if (checkFtw() == true){
                            document.getElementById("title").innerHTML = "Red Win!"
                        }
                    document.getElementById(scoreBoxId).src = ".media/flagRed.png";
                    }
                }
        }
    }   
}

function wallCollide(player, pxOffsetX, pxOffsetY){

    let playerRectX =  getAttributesById(String("player" + player)).x + pxOffsetX;
    let playerRectY =  getAttributesById(String("player" + player)).y + pxOffsetY;
    let playerRectWidth = getAttributesById(String("player" + player)).width;
    let playerRectHeight = getAttributesById(String("player" + player)).height;

    let numOfHitboxes = document.getElementsByClassName("hitbox").length

    for (let i = 0; i < numOfHitboxes; i++) {
    
        let wallBoxId = "hitbox" + (i + 1);
        let wallRectX = getAttributesById(wallBoxId).x +20;
        let wallRectY = getAttributesById(wallBoxId).y +20;
        let wallRectWidth = getAttributesById(wallBoxId).width -40;
        let wallRectHeight = getAttributesById(wallBoxId).height -40;
    

        //will player collide with the wall rectangle?
        if (wallRectX + wallRectWidth > playerRectX &&
            wallRectX < playerRectX + playerRectWidth &&
            wallRectY + wallRectHeight > playerRectY &&
            wallRectY < playerRectY + playerRectHeight
            ){
                return true
            }
    }   
}