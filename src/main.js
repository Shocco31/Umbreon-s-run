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
  console.log(width);
  var gf = document.getElementById("gamefield");
  console.log(gf.offsetWidth)

  if(event.keyCode == 90 || event.keyCode == 38) {
  console.log("tu as appuyé sur z !")
  gsap.to("#umbreon", {
    duration: 0.2,
      y:"-=" + (gf.offsetWidth / width)
  })
  
}
  if(event.keyCode == 83 || event.keyCode == 40) {
  console.log("tu as appuyé sur s !")
  gsap.to("#umbreon", {
    duration: 0.2,
      y:"+=" + (gf.offsetWidth / width)
  })
}
  if(event.keyCode == 81 || event.keyCode == 37) {
  console.log("tu as appuyé sur q !")
  gsap.to("#umbreon", {
    duration: 0.2,
      x:"-=" + (gf.offsetWidth / width)
  })
}
  if(event.keyCode == 68 || event.keyCode == 39) {
  console.log("tu as appuyé sur d !")
  gsap.to("#umbreon", {
    duration: 0.2,
      x:"+=" + (gf.offsetWidth / width)
  })
}
}

//  animation 1
gsap.to("#james_path", {
  duration: 2,
  motionPath: {
    path: "#james",
    align: "#james"
  },
  ease: Linear.easeNone,
  repeat: -1
});
