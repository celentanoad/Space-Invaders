function Alien(x, y){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toKill = false;
    this.xdir = .5;

    this.show = function() {
        fill(0, 255, 0);
        rect(this.x, this.y, this.r*2, this.r*2);
    }
    this.kill = function() {
        this.toKill = true;
    }
    this.move = function() {
        this.x += this.xdir;
    }
    this.drop = function() {
        this.xdir *= -1
        this.y += 10;
    }
}