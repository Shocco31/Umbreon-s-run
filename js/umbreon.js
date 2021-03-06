var collision = new Audio("./assets/sounds/collision.wav");
collision.volume = 0.2;

var good_button = new Audio("./assets/sounds/good_button.wav");
good_button.volume = 0.2;

var wrong_button = new Audio("./assets/sounds/wrong_button.wav");
wrong_button.volume = 0.2;

function ChangeUmbreonSpriteManually(sprite) {
    document.getElementById("umbreon").setAttribute('src', "./assets/images/umbreon/" + sprite + ".png")
}

function UmbreonGoUp() {
    var map = document.getElementById("map");

    if (maze[Umbreon.coords.y - 1][Umbreon.coords.x] == WALL || maze[Umbreon.coords.y - 1][Umbreon.coords.x] == LOCK) {
        ChangeUmbreonSpriteManually("umbu1")
        collision.play();
    }
    else {
        Umbreon.anim.set("#umbreon", { attr: { src: "./assets/images/umbreon/umbu1.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (Umbreon.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbu3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (Umbreon.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbu2.png" } })
        Umbreon.coords.y--;
    }
}

function UmbreonGoDown() {
    var map = document.getElementById("map");

    if (maze[Umbreon.coords.y + 1][Umbreon.coords.x] == WALL || maze[Umbreon.coords.y + 1][Umbreon.coords.x] == LOCK) {
        ChangeUmbreonSpriteManually("umbd1")
        collision.play();
    }
    else {
        Umbreon.anim.set("#umbreon", { attr: { src: "./assets/images/umbreon/umbd1.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (Umbreon.coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbd3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (Umbreon.coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbd2.png" } })
        Umbreon.coords.y++;
    }
}

function UmbreonGoLeft() {
    var map = document.getElementById("map");

    if (maze[Umbreon.coords.y][Umbreon.coords.x - 1] == WALL || maze[Umbreon.coords.y][Umbreon.coords.x - 1] == LOCK) {
        ChangeUmbreonSpriteManually("umbl1")
        collision.play();
    }
    else {
        Umbreon.anim.set("#umbreon", { attr: { src: "./assets/images/umbreon/umbl1.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (Umbreon.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbl3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (Umbreon.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbl2.png" } })
        Umbreon.coords.x--;
    }
}

function UmbreonGoRight() {
    var map = document.getElementById("map");

    if (maze[Umbreon.coords.y][Umbreon.coords.x + 1] == WALL || maze[Umbreon.coords.y][Umbreon.coords.x + 1] == LOCK) {
        ChangeUmbreonSpriteManually("umbr1")
        collision.play();
    }
    else {
        Umbreon.anim.set("#umbreon", { attr: { src: "./assets/images/umbreon/umbr1.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (Umbreon.coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbr3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (Umbreon.coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
        })
        .set("#umbreon", { attr: { src: "./assets/images/umbreon/umbr2.png" } })
        Umbreon.coords.x++;
    }
}