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

var umbreon_tl = null;
var james_tl = null;
var jessie_tl = null;

var music = new Audio("../assets/sounds/main-music.mp3");
music.volume = 0.01;
music.loop = true;


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

function GameEntitiesPositioning() {
    if (gameStarted) {
        var map = document.getElementById("map");
        var umbreon = document.getElementById("umbreon");
        var james = document.getElementById("james");
        var jessie = document.getElementById("jessie");
        umbreon.style.visibility = 'visible';
        james.style.visibility = 'visible';
        jessie.style.visibility = 'visible';
        umbreon.style.transform = 'translate(' + ((umbreonCoords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (umbreonCoords.y * (map.offsetHeight / height)) + 'px)';
        james.style.transform = 'translate(' + ((jamesCoords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (jamesCoords.y * (map.offsetHeight / height)) + 'px)';
        jessie.style.transform = 'translate(' + ((jessieCoords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (jessieCoords.y * (map.offsetHeight / height)) + 'px)';

        if (james_tl) {
            james_tl.kill();
            james_tl = new TimelineMax();
            StartJamesAnimation();
        }
        if (jessie_tl) {
            jessie_tl.kill();
            jessie_tl = new TimelineMax();
            StartJessieAnimation();
        }
    }
}

function OnKeyPress(event) {
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
        if (!umbreon_tl.isActive()) {
            if (event.keyCode == keyCodes["Z"] || event.keyCode == keyCodes["ARROW_UP"]) {
                UmbreonGoUp()
            }
            if (event.keyCode == keyCodes["S"] || event.keyCode == keyCodes["ARROW_DOWN"]) {
                UmbreonGoDown();
            }
            if (event.keyCode == keyCodes["Q"] || event.keyCode == keyCodes["ARROW_LEFT"]) {
                UmbreonGoLeft();
            }
            if (event.keyCode == keyCodes["D"] || event.keyCode == keyCodes["ARROW_RIGHT"]) {
                UmbreonGoRight();
            }
        }
    }
}

function StartGame() {
    gameStarted = true;
    this.GameEntitiesPositioning();

    umbreon_tl = new TimelineMax();
    james_tl = new TimelineMax();
    jessie_tl = new TimelineMax();

    //music.play();
    StartJamesAnimation();
    StartJessieAnimation();

    //  animation James
//     gsap.to("#james", {
//         duration: 7,
//         motionPath: {
//         path: "#james_path",
//         align: "#james_path"
//         },
//         ease: Linear.easeNone,
//         repeat: -1,
//         yoyo: true,
//     });
    
//     //  animation James
//     gsap.to("#jessie", {
//         duration: 10,
//         motionPath: {
//         path: "#jessie_path",
//         align: "#jessie_path"
//         },
//         ease: Linear.easeNone,
//         repeat: -1,
//         yoyo: true,
//     });
}

window.onresize = function(event) {
    this.MapResize();
    this.GameEntitiesPositioning();
};