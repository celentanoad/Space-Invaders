function Ship() {
    this.x = width/2;
    this.direction = 0;
    this.show = function() {
        fill(255);
        rect(this.x, height - 20, 20, 20);
    }
    this.move = function() {
        this.x += this.direction*5;
    }
    this.setDirection = function(dir) {
        this.direction = dir
    }
}