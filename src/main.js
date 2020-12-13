const horizScrollBarHeight = 18;

var umbreonCoords = {
    x: 1,
    y: 0
};

var operationInProgress = null;

function MapResize() {
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
    var entities = document.getElementsByClassName("game-entity");
    for (let entity of entities) {
        entity.style.left = umbreonCoords.x * (map.offsetWidth / width);
        entity.style.top = umbreonCoords.y * (map.offsetHeight / height);
    }
}

var tl = new TimelineMax();

function appuiTouche(event) {
    var map = document.getElementById("map");

    if (!tl.isActive()) {
        if (event.keyCode == 90 || event.keyCode == 38) {
            tl.to("#umbreon", {
                duration: 0.2,
                y:"-=" + (map.offsetWidth / width)
            })
            umbreonCoords.y++;
        }
        if (event.keyCode == 83 || event.keyCode == 40) {
            tl.to("#umbreon", {
                duration: 0.2,
                y:"+=" + (map.offsetWidth / width)
            })
            umbreonCoords.y--;
        }
        if (event.keyCode == 81 || event.keyCode == 37) {
            tl.to("#umbreon", {
                duration: 0.2,
                x:"-=" + (map.offsetWidth / width)
            })
            umbreonCoords.x--;
        }
        if (event.keyCode == 68 || event.keyCode == 39) {
            tl.to("#umbreon", {
                duration: 0.2,
                x:"+=" + (map.offsetWidth / width)
            })
            umbreonCoords.x++;
        }
    }
}

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

window.onresize = function(event) {
    this.MapResize();
    this.GameEntitiesResize();
};