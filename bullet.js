function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.toDelete = false;

    this.show = function() {
        noStroke();
        fill(50, 0, 255);
        ellipse(this.x, this.y, this.r*2, this.r*2)
    }

    this.move = function() {
        this.y += - 5;
    }

    this.hits = function(alien) {
        let distance = dist(this.x, this.y, alien.x, alien.y);
        if (distance < this.r + alien.r) {
            return true;
        } else {
            return false;
        }
    }

    this.deleteBullet = function() {
        this.toDelete = true;
    }
}