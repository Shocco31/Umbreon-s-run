var umbreonCoords = {
    x: 1,
    y: 0
};

var collision = new Audio("../assets/sounds/collision.wav");
collision.volume = 0.01;

function ChangeUmbreonSprite(sprite) {
    document.getElementById("umbreon").setAttribute('src', "../assets/images/umbreon/" + sprite + ".png")
}

function UmbreonGoUp() {
    var map = document.getElementById("map");

    ChangeUmbreonSprite("umbu1")
    if (maze[umbreonCoords.y - 1][umbreonCoords.x] == WALL) {
        collision.play();
    }
    else {
        umbreon_tl.to("#umbreon", {
            duration: 0.085,
            y: (umbreonCoords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbu3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (umbreonCoords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbu2.png" } })
        umbreonCoords.y--;
    }
}

function UmbreonGoDown() {
    var map = document.getElementById("map");

    ChangeUmbreonSprite("umbd1")
    if (maze[umbreonCoords.y + 1][umbreonCoords.x] == WALL) {
        collision.play();
    }
    else {
        umbreon_tl.to("#umbreon", {
            duration: 0.085,
            y: (umbreonCoords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbd3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            y: (umbreonCoords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbd2.png" } })
        umbreonCoords.y++;
    }
}

function UmbreonGoLeft() {
    var map = document.getElementById("map");
    console.log(map.offsetWidth)
    ChangeUmbreonSprite("umbl1")
    if (maze[umbreonCoords.y][umbreonCoords.x - 1] == WALL) {
        collision.play();
    }
    else {
        umbreon_tl.to("#umbreon", {
            duration: 0.085,
            x: (umbreonCoords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbl3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (umbreonCoords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbl2.png" } })
        umbreonCoords.x--;
    }
}

function UmbreonGoRight() {
    var map = document.getElementById("map");

    ChangeUmbreonSprite("umbr1")
    if (maze[umbreonCoords.y][umbreonCoords.x + 1] == WALL) {
        collision.play();
    }
    else {
        umbreon_tl.to("#umbreon", {
            duration: 0.085,
            x: (umbreonCoords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbr3.png" } })
        .to("#umbreon", {
            duration: 0.085,
            x: (umbreonCoords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
        })
        .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbr2.png" } })
        umbreonCoords.x++;
    }
}