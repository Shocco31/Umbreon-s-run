function JamesGoLeft(james) {
    var map = document.getElementById("map");
    james.anim.set("#james", { attr: { src: "../assets/images/james/jaml1.png" } })
    .to("#james", {
        x: (james.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jaml3.png" } })
    .to("#james", {
        x: (james.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jaml2.png" } })
    james.coords.x--;
}

function JamesGoRight(james) {
    var map = document.getElementById("map");
    james.anim.set("#james", { attr: { src: "../assets/images/james/jamr1.png" } })
    .to("#james", {
        x: (james.coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamr3.png" } })
    .to("#james", {
        x: (james.coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamr2.png" } })
    james.coords.x++;
}

function JamesGoUp(james) {
    var map = document.getElementById("map");
    james.anim.set("#james", { attr: { src: "../assets/images/james/jamu1.png" } })
    .to("#james", {
        y: (james.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamu3.png" } })
    .to("#james", {
        y: (james.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamu2.png" } })
    james.coords.y--;
}

function JamesGoDown(james) {
    var map = document.getElementById("map");
    james.anim.set("#james", { attr: { src: "../assets/images/james/jamd1.png" } })
    .to("#james", {
        y: (james.coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamd3.png" } })
    .to("#james", {
        y: (james.coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#james", { attr: { src: "../assets/images/james/jamd2.png" } })
    james.coords.y++;
}

// Calls the appropriate method accordingly to the 'path' string : each letter will call a method to move the entity
function StartJamesAnimation(james) {
    for (let direction of james.path) {
        switch (direction) {
            case 'L':
                JamesGoLeft(james);
                break;
            case 'R':
                JamesGoRight(james);
                break;            
            case 'U':
                JamesGoUp(james);
                break;            
            case 'D':
                JamesGoDown(james);
                break;
        }
    }
    james.anim.duration(james.path.length / 5);
    james.anim.repeat(-1);
}