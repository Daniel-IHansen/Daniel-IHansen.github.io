
class Player {
    constructor(x, y, id) {
        super(id);
        this.x = x;
        this.y = y;
        this.id = document.getElementById(id);;
        
    }

    draw() {
        // this.player.style().top = "100px";
        return 1;
    }
}