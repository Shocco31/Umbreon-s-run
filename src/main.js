const keyCodes = {
    "SPACE": 32,
    "ARROW_UP": 38,
    "ARROW_DOWN": 40,
    "ARROW_LEFT": 37,
    "ARROW_RIGHT": 39,
    "Z": 90,
    "Q": 81,
    "S": 83,
    "D": 68,
    "M": 77
};

var gameStarted = false;
var umbreonCoords = {
    x: 1,
    y: 0
};
var operationInProgress = null;
var tl = new TimelineMax();

var music = new Audio("../assets/sounds/main-music.mp3");
music.volume = 0.01;
music.loop = true;

var collision = new Audio("../assets/sounds/collision.wav");
collision.volume = 0.01;

function MapResize() {
    const horizScrollBarHeight = 18;
    var map = document.getElementById("map");
    var mapWidth = map.offsetWidth;
    var mapHeight = map.offsetHeight;
    var windowHeight = window.innerHeight - horizScrollBarHeight;
    if (mapHeight > windowHeight) {
        map.style.width = (windowHeight * (width / height)) + "px";
    }
    var gamefield = document.getElementById("gamefield");
    if (mapHeight < window.innerHeight - horizScrollBarHeight && (mapWidth + 1) < gamefield.offsetWidth) {
        let newMapWidth = (mapWidth + (gamefield.offsetHeight - mapHeight));
        if (newMapWidth < gamefield.offsetWidth) {
            map.style.width = newMapWidth + "px";
        }
        else {
            map.style.width = '100%';
        }
    }
}

function GameEntitiesResize() {
    var map = document.getElementById("map");
    var umbreon = document.getElementById("umbreon");
    umbreon.style.transform = 'translate(' + ((umbreonCoords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (umbreonCoords.y * (map.offsetHeight / height)) + 'px)';
}

function ChangeUmbreonSprite(sprite) {
    document.getElementById("umbreon").setAttribute('src', "../assets/images/umbreon/" + sprite + ".png")
}

function OnKeyPress(event) {
    var map = document.getElementById("map");

    if (Object.values(keyCodes).includes(event.keyCode)) {
        event.preventDefault();
    }
    if (event.keyCode == keyCodes["SPACE"]) {
        if (gameStarted != true) {
            StartGame();
        }
    }
    if (gameStarted == true) {
        if (event.keyCode == keyCodes["M"]) {
            music.muted = !music.muted;
        }
        if (!tl.isActive()) {
            if (event.keyCode == keyCodes["Z"] || event.keyCode == keyCodes["ARROW_UP"]) {
                ChangeUmbreonSprite("umbu1")
                if (maze[umbreonCoords.y - 1][umbreonCoords.x] == WALL) {
                    collision.play();
                }
                else {
                    tl.to("#umbreon", {
                        duration: 0.07,
                        y:"-=" + (map.offsetWidth / width / 2)
                    })
                    .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbu3.png" } })
                    .to("#umbreon", {
                        duration: 0.07,
                        y:"-=" + (map.offsetWidth / width / 2)
                    })
                    umbreonCoords.y--;
                }
                ChangeUmbreonSprite("umbu2")
            }
            if (event.keyCode == keyCodes["S"] || event.keyCode == keyCodes["ARROW_DOWN"]) {
                ChangeUmbreonSprite("umbd1")
                if (maze[umbreonCoords.y + 1][umbreonCoords.x] == WALL) {
                    collision.play();
                }
                else {
                    tl.to("#umbreon", {
                        duration: 0.07,
                        y:"+=" + (map.offsetWidth / width / 2)
                    })
                    .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbd3.png" } })
                    .to("#umbreon", {
                        duration: 0.07,
                        y:"+=" + (map.offsetWidth / width / 2)
                    })
                    umbreonCoords.y++;
                }
                ChangeUmbreonSprite("umbd2")
            }
            if (event.keyCode == keyCodes["Q"] || event.keyCode == keyCodes["ARROW_LEFT"]) {
                ChangeUmbreonSprite("umbl1")
                tl.set("#umbreon", { attr: { src: "../assets/images/umbreon/umbl1.png" } })
                if (maze[umbreonCoords.y][umbreonCoords.x - 1] == WALL) {
                    collision.play();
                }
                else {
                    tl.to("#umbreon", {
                        duration: 0.07,
                        x:"-=" + (map.offsetWidth / width / 2)
                    })
                    .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbl3.png" } })
                    .to("#umbreon", {
                        duration: 0.07,
                        x:"-=" + (map.offsetWidth / width / 2)
                    })
                    umbreonCoords.x--;
                }
                ChangeUmbreonSprite("umbl2")
            }
            if (event.keyCode == keyCodes["D"] || event.keyCode == keyCodes["ARROW_RIGHT"]) {
                ChangeUmbreonSprite("umbr1")
                if (maze[umbreonCoords.y][umbreonCoords.x + 1] == WALL) {
                    collision.play();
                }
                else {
                    tl.to("#umbreon", {
                        duration: 0.07,
                        x:"+=" + (map.offsetWidth / width / 2)
                    })
                    .set("#umbreon", { attr: { src: "../assets/images/umbreon/umbr3.png" } })
                    .to("#umbreon", {
                        duration: 0.07,
                        x:"+=" + (map.offsetWidth / width / 2)
                    })
                    umbreonCoords.x++;
                }
                ChangeUmbreonSprite("umbr2")
            }
        }
    }
}

function StartGame() {
    gameStarted = true;
    music.play();

    //  animation James
    gsap.to("#james", {
        duration: 7,
        motionPath: {
        path: "#james_path",
        align: "#james_path"
        },
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
    });
    
    //  animation James
    gsap.to("#jessie", {
        duration: 10,
        motionPath: {
        path: "#jessie_path",
        align: "#jessie_path"
        },
        ease: Linear.easeNone,
        repeat: -1,
        yoyo: true,
    });
}

window.onresize = function(event) {
    this.MapResize();
    this.GameEntitiesResize();
};