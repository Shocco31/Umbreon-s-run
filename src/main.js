// CONSTANTES
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

// VARIABLES
var gameStarted = false;
var checkInterval = null;

var umbreon_tl = null;
var james_tl = null;
var jessie_tl = null;
var sbire1_tl = null;

var umbreon_coords = {
    x: 1,
    y: 0
};

var james_coords = {
    x: 10,
    y: 16
};

var jessie_coords = {
    x: 17,
    y: 6
};

var sbire1_coords = {
    x: 1,
    y: 5
};

window.onresize = function() {
    this.MapResize();
    this.GameEntitiesPositioning();
};

// RESPONSIVE
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
        var sbire1 = document.getElementById("sbire1");
        umbreon.style.visibility = 'visible';
        james.style.visibility = 'visible';
        jessie.style.visibility = 'visible';
        sbire1.style.visibility = 'visible';
        umbreon.style.transform = 'translate(' + ((umbreon_coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (umbreon_coords.y * (map.offsetHeight / height)) + 'px)';
        james.style.transform = 'translate(' + ((james_coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (james_coords.y * (map.offsetHeight / height)) + 'px)';
        jessie.style.transform = 'translate(' + ((jessie_coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (jessie_coords.y * (map.offsetHeight / height)) + 'px)';
        sbire1.style.transform = 'translate(' + ((sbire1_coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (sbire1_coords.y * (map.offsetHeight / height)) + 'px)';

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
        if (sbire1_tl) {
            sbire1_tl.kill();
            sbire1_tl = new TimelineMax();
            StartSbireAnimation(1, sbire1_tl, sbire1_coords);
        }
    }
}

// START GAME
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
            MuteMusic();
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
            if (maze[umbreon_coords.y][umbreon_coords.x] == END) {
                victory();
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
    sbire1_tl = new TimelineMax();

    PlayMainMusic();
    
    StartJamesAnimation();
    StartJessieAnimation();
    StartSbireAnimation(1, sbire1_tl, sbire1_coords);
    checkInterval = setInterval(checkEnnemies, 250)

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

function EndGame() {
    //james_tl.kill();
    //jessie_tl.kill();
    sbire1_tl.kill();
    clearInterval(checkInterval);
    gameStarted = false;
}

// GAMEOVER
function gameOver() {
    EndGame();
    PlayDefeatMusic();
    console.log("game over")
}

// VICTORY
function victory() {
    EndGame();
    PlayWinMusic();
    console.log("victory")
}

// COLLISIONS
function checkCollision(div1, div2) {
    // la sensibilité : à ajuster si besoin
    let threshold = -5;
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();
    return !(
      rect1.right < rect2.left + threshold ||
      rect1.left > rect2.right - threshold ||
      rect1.bottom < rect2.top + threshold ||
      rect1.top > rect2.bottom - threshold
    );
  }

function checkEnnemies() {
	// on récupère tous les ennemis : 
    let all_ennemies = document.querySelectorAll(".ennemy");
    let player = document.querySelector(".player");
	// on regarde s'il y a une collision
	all_ennemies.forEach(function(element) {
	    if (checkCollision(player, element)) {
	        gameOver()
	    } 
	})
}
  
