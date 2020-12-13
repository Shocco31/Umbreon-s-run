const horizScrollBarHeight = 18;

window.onresize = function() {
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
};
function appuiTouche(event) {
    var map = document.getElementById("map");
    if (event.keyCode == 90 || event.keyCode == 38) {
        gsap.to("#umbreon", {
            y:"-=" + (map.offsetWidth / width)
        })
    }
    if (event.keyCode == 83) {
        gsap.to("#umbreon", {
            y:"+=" + (map.offsetWidth / width)
        })
    }
    if (event.keyCode == 81) {
        gsap.to("#umbreon", {
            x:"-=" + (map.offsetHeight / height)
        })
    }
    if (event.keyCode == 68) {
        gsap.to("#umbreon", {
            x:"+=" + (map.offsetHeight / height)
        })
    }
}
