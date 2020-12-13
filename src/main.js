function appuiTouche(event) {
    console.log(width);
    var gf = document.getElementById("gamefield");
    console.log(gf.offsetWidth)
    if(event.keyCode == 90 || event.keyCode == 38) {
    console.log("tu as appuyé sur z !")
    gsap.to("#umbreon", {

        y:"-=" + (gf.offsetWidth / width)
    })
    
  }
    if(event.keyCode == 83) {
    console.log("tu as appuyé sur s !")
    gsap.to("#umbreon", {

        y:"+=" + (gf.offsetWidth / width)
    })
  }
    if(event.keyCode == 81) {
    console.log("tu as appuyé sur q !")
    gsap.to("#umbreon", {

        x:"-=" + (gf.offsetWidth / width)
    })
  }
    if(event.keyCode == 68) {
    console.log("tu as appuyé sur d !")
    gsap.to("#umbreon", {

        x:"+=" + (gf.offsetWidth / width)
    })
  }
}
