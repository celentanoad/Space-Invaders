let ship;
let aliens = [];
let bullets = [];
let message;

function setup() {
    createCanvas(600, 400);
    message = new Text();
    ship = new Ship();
    for (let i = 0; i < 5; i++) {
        aliens[i] = new Alien(i * 100 + 100, 50);
    }
}

function draw() {
    background(51);
    message.show();
    ship.show();
    ship.move();
    edge = false;
    for (let i = 0; i < aliens.length; i++) {
        if (aliens[i].toKill) i++;
        aliens[i].show();
        aliens[i].move();
        if (aliens[i].x > width ||
            aliens[i].x < 0) edge = true;
    }

    if (edge) {
        for (alien of aliens) {
            alien.drop();
        }
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
        checkWin();
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

function checkWin() {
    if (!aliens.length) {
        message.setText("You Win!")
        message.show();
    }
}