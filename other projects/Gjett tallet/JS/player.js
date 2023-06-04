
class Player {
    constructor(id) {
        this.x = document.getElementById(String(id)).x;
        this.y = document.getElementById(String(id)).y;
        this.id = id;
        // this.collision = new Collision(this.x, this.y) // collision logic
    }
    // render
    draw(x, y) {
        x = this.x
        y = this.y
    }
}
