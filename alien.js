function Alien(x, y){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toKill = false;

    this.show = function() {
        fill(0, 255, 0);
        rect(this.x, this.y, this.r*2, this.r*2);
    }
    this.kill = function() {
        this.toKill = true;
    }
}