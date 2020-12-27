// CONSTANTS
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
var gameEnded = false;
var checkInterval = null;

var Umbreon = {
    anim: null,
    coords: {
        x: 1,
        y: 0
    },
};

var James = {
    anim: null,
    coords: {
        x: 25,
        y: 20
    },
    path: "LLLLLLLLLUUUUUUULLLDLLLLLLDDRDDUULUURRRRRRURRRDDDDDDDRRRRRRRRR",
    imgSrc: "./assets/images/james/jamend.png",
    sentence: "Rendez-vous tous ou ce sera la guerre."
};

var Jessie = {
    anim: null,
    coords: {
        x: 18,
        y: 2
    },
    path: "RRRRRRRRRRDDRRRRURRRRRRDDLRUULLLLLDDDDDLUUULLLLUUULLLLLLLLLL",
    imgSrc: "./assets/images/jessie/jesend.png",
    sentence: "La Team Rocket, plus rapide que la lumière."
};

var Sbire1 = {
    anim: null,
    coords: {
        x: 5,
        y: 11
    },
    path: "RRRRRRRRUUUUUUUUULLLLLLDDDLLLLLLDDDUUURRRRRRUUURRRRRRDDDDDDDDDLLLLLLLL",
    imgSrc: "./assets/images/sbire/sbiend.png",
    sentence: "Halte là !",
    number: 1
};

var Sbire2 = {
    anim: null,
    coords: {
        x: 37,
        y: 16
    },
    path: "UUUULLLUULLLLDDDDDDDLLLLLLLUUUUUURDDDDDRDRRRRRUURRRRRULLLLLUUUURRRRDDRRRDDDD",
    imgSrc: "./assets/images/sbire/sbiend.png",
    sentence: "Halte là !",
    number: 2
}

// When we change the size of the screen
window.onresize = function() {
    MapResize();
    this.GameEntitiesPositioning();
};

function GameEntitiesPositioning() {
    if (gameStarted && !gameEnded) {
        // Get of the map, the player, and the enemies
        var map = document.getElementById("map");
        var umbreon = document.getElementById("umbreon");
        var james = document.getElementById("james");
        var jessie = document.getElementById("jessie");
        var sbire1 = document.getElementById("sbire1");
        var sbire2 = document.getElementById("sbire2");

        // Put them visible
        umbreon.style.visibility = 'visible';
        james.style.visibility = 'visible';
        jessie.style.visibility = 'visible';
        sbire1.style.visibility = 'visible';
        sbire2.style.visibility = 'visible';

        // Put them at the good place, responsively
        umbreon.style.transform = 'translate(' + ((Umbreon.coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (Umbreon.coords.y * (map.offsetHeight / height)) + 'px)';
        james.style.transform = 'translate(' + ((James.coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (James.coords.y * (map.offsetHeight / height)) + 'px)';
        jessie.style.transform = 'translate(' + ((Jessie.coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (Jessie.coords.y * (map.offsetHeight / height)) + 'px)';
        sbire1.style.transform = 'translate(' + ((Sbire1.coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (Sbire1.coords.y * (map.offsetHeight / height)) + 'px)';
        sbire2.style.transform = 'translate(' + ((Sbire2.coords.x * (map.offsetWidth / width) + (map.offsetWidth / width / 10))) + 'px, ' + (Sbire2.coords.y * (map.offsetHeight / height)) + 'px)';

        // Restarting james' animation
        if (James.anim) {
            James.anim.kill();
            James.anim = new TimelineLite();
            StartJamesAnimation(James);
        }
        // Restarting jessie's animation
        if (Jessie.anim) {
            Jessie.anim.kill();
            Jessie.anim = new TimelineLite();
            StartJessieAnimation(Jessie);
        }
        // Restarting sbire's animation
        if (Sbire1.anim) {
            Sbire1.anim.kill();
            Sbire1.anim = new TimelineLite();
            StartSbireAnimation(Sbire1);
        }
        // Restarting 'sbire with path' animation
        if (Sbire2.anim) {
            Sbire2.anim.kill();
            Sbire2.anim = new TimelineLite();
            StartSbireAnimation(Sbire2);
        }
    }
}

function OnKeyPress(event) {
    // Cancel of the normal behaviour of each key that we use
    if (Object.values(keyCodes).includes(event.keyCode)) {
        event.preventDefault();
    }
    // From here, each action related to the keystroke
    if (event.keyCode == keyCodes["SPACE"]) {
        if (gameStarted == false && gameEnded == false) {
            StartGame();
        }
    }
    if (event.keyCode == keyCodes["M"]) {
        MuteMusic();
    }
    if (gameStarted == true && gameEnded == false) {

        if (!Umbreon.anim.isActive()) {
            if (event.keyCode == keyCodes["Z"] || event.keyCode == keyCodes["ARROW_UP"]) {
                UmbreonGoUp()
            }
            else if (event.keyCode == keyCodes["S"] || event.keyCode == keyCodes["ARROW_DOWN"]) {
                UmbreonGoDown();
            }
            else if (event.keyCode == keyCodes["Q"] || event.keyCode == keyCodes["ARROW_LEFT"]) {
                UmbreonGoLeft();
            }
            else if (event.keyCode == keyCodes["D"] || event.keyCode == keyCodes["ARROW_RIGHT"]) {
                UmbreonGoRight();
            }
            if (maze[Umbreon.coords.y][Umbreon.coords.x] == WRONG_BUTTON) {
                wrong_button.play();
                RevealWrongButton(Umbreon.coords.x, Umbreon.coords.y);
            }
            else if (maze[Umbreon.coords.y][Umbreon.coords.x] == GOOD_BUTTON) {
                good_button.play();
                RevealGoodButton(Umbreon.coords.x, Umbreon.coords.y);
            }
            else if (maze[Umbreon.coords.y][Umbreon.coords.x] == END) {
                Victory();
            }
        }
    }
}

function StartGame() {
    // For now, if we start again the game, we need to reload the page
    if (gameEnded == true) {
        document.location.reload();
    }

    gameStarted = true;
    console.log("Game started");

    // Init player position
    Umbreon.coords = {
        x: 1,
        y: 0
    };

    // Init characters sprites and positions
    this.GameEntitiesPositioning();
    
    // Init animations
    Umbreon.anim = new TimelineLite();
    James.anim = new TimelineLite();
    Jessie.anim = new TimelineLite();
    Sbire1.anim = new TimelineLite();
    Sbire2.anim = new TimelineLite();
    
    // Start animations
    StartJamesAnimation(James);
    StartJessieAnimation(Jessie);
    StartSbireAnimation(Sbire1);
    StartSbireAnimation(Sbire2);

    // Start collision checking
    checkInterval = setInterval(CheckEnnemies, 250)
    
    // Start music
    PlayMainMusic();

    // Start chrono
    StartChrono();
}

function EndGame() {
    // Stop animations
    James.anim.kill();
    Jessie.anim.kill();
    Sbire1.anim.kill();
    Sbire2.anim.kill();

    // Stop collision checking
    clearInterval(checkInterval);

    // Stop chrono
    StopChrono();

    // Defeat Screen
    document.getElementById("myModal").style.display = "block";

    // Win screen

    gameEnded = true;
}

// GAMEOVER
function GameOver(catcher) {
    // We stop the game and start the gameover music
    EndGame();
    PlayDefeatMusic();
    document.getElementById("modal-title").innerText = catcher.sentence;
    document.getElementById("modal-img").src = catcher.imgSrc;

}

// VICTORY
function Victory() {
    // We stop the game and start the victory music
    EndGame();
    PlayWinMusic();
    document.getElementById("modal-title").innerText = "Félicitations, vous avez retrouvé votre dresseur Pokémon."
    document.getElementById("modal-img").src = "./assets/images/red/redend2.png"

}
