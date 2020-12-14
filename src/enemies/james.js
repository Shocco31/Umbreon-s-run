function JamesGoLeft() {
    var map = document.getElementById("map");
    james_tl.set("#james", { attr: { src: "../assets/images/james/jaml1.png" } })
    .to("#james", {
        x: (james_coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jaml3.png" } })
    .to("#james", {
        x: (james_coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jaml2.png" } })
    james_coords.x--;
}

function JamesGoRight() {
    var map = document.getElementById("map");
    james_tl.set("#james", { attr: { src: "../assets/images/james/jamr1.png" } })
    .to("#james", {
        x: (james_coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamr3.png" } })
    .to("#james", {
        x: (james_coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamr2.png" } })
    james_coords.x++;
}

function JamesGoUp() {
    var map = document.getElementById("map");
    james_tl.set("#james", { attr: { src: "../assets/images/james/jamu1.png" } })
    .to("#james", {
        y: (james_coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamu3.png" } })
    .to("#james", {
        y: (james_coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamu2.png" } })
    james_coords.y--;
}

function JamesGoDown() {
    var map = document.getElementById("map");
    james_tl.set("#james", { attr: { src: "../assets/images/james/jamd1.png" } })
    .to("#james", {
        y: (james_coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamd3.png" } })
    .to("#james", {
        y: (james_coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamd2.png" } })
    james_coords.y++;
}

function StartJamesAnimation() {
    var path = "RDLU";
    for (let direction of path) {
        switch (direction) {
            case 'L':
                JamesGoLeft();
                break;
            case 'R':
                JamesGoRight();
                break;            
            case 'U':
                JamesGoUp();
                break;            
            case 'D':
                JamesGoDown();
                break;
        }
    }
    james_tl.duration(3);
    james_tl.repeat(-1);
}