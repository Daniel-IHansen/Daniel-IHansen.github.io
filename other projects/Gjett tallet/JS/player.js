
class Player {
    constructor(id) {
        // this.x = document.getElementById(String(id)).x;
        // this.y = document.getElementById(String(id)).y;
        this.id = document.getElementById(id);
        // this.id.style.left = "20px"
        // this.collision = new Collision(this.x, this.y) // collision logic
    }
    // render
    draw(x, y) {
        this.id.style.left =  String(x) + "px"
        this.id.style.top =  String(y) + "px"
    }
}
