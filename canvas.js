let ship;
let aliens = [];
let bullets = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (let i = 0; i < 5; i++) {
        aliens[i] = new Alien(i * 100 + 100, 50);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();
    for (let i = 0; i < aliens.length; i++) {
        if (aliens[i].toKill) i++;
        aliens[i].show();
    }
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        for (let j =0; j < aliens.length; j++){
            if(bullets[i].hits(aliens[j])) {
                aliens[j].kill();
                bullets[i].deleteBullet();
            }
        }
    }

    for (let i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].toDelete) bullets.splice(i, 1);
    }

    for (let i = aliens.length -1; i >= 0; i--) {
        if (aliens[i].toKill) aliens.splice(i, 1);
    }
}

function keyPressed() {
    if (key === ' ') {
        let bullet = new Bullet(ship.x, height-10);
        bullets.push(bullet);
    }
    if (keyCode === RIGHT_ARROW) ship.setDirection(1);
    if (keyCode === LEFT_ARROW) ship.setDirection(-1);
}

function keyReleased() {
    if (keyCode !== ' ') ship.setDirection(0);
}