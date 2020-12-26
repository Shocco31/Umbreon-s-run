function SbireGoLeft(sbire, tag) {
    var map = document.getElementById("map");

    sbire.anim.set(tag, { attr: { src: "../assets/images/sbire/sbil1.png" } })
    .to(tag, {
        x: (sbire.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbil3.png" } })
    .to(tag, {
        x: (sbire.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbil2.png" } })
    sbire.coords.x--;
}

function SbireGoRight(sbire, tag) {
    var map = document.getElementById("map");

    sbire.anim.set(tag, { attr: { src: "../assets/images/sbire/sbir1.png" } })
    .to(tag, {
        x: (sbire.coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbir3.png" } })
    .to(tag, {
        x: (sbire.coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbir2.png" } })
    sbire.coords.x++;
}

function SbireGoUp(sbire, tag) {
    var map = document.getElementById("map");

    sbire.anim.set(tag, { attr: { src: "../assets/images/sbire/sbiu1.png" } })
    .to(tag, {
        y: (sbire.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbiu3.png" } })
    .to(tag, {
        y: (sbire.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbiu2.png" } })
    sbire.coords.y--;
}

function SbireGoDown(sbire, tag) {
    var map = document.getElementById("map");

    sbire.anim.set(tag, { attr: { src: "../assets/images/sbire/sbid1.png" } })
    .to(tag, {
        y: (sbire.coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbid3.png" } })
    .to(tag, {
        y: (sbire.coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbid2.png" } })
    sbire.coords.y++;
}

// Calls the appropriate method accordingly to the 'path' string : each letter will call a method to move the entity
function StartSbireAnimation(sbire) {
    var tag = "#sbire" + sbire.number;
    for (let direction of sbire.path) {
        switch (direction) {
            case 'L':
                SbireGoLeft(sbire, tag);
                break;
            case 'R':
                SbireGoRight(sbire, tag);
                break;
            case 'U':
                SbireGoUp(sbire, tag);
                break;
            case 'D':
                SbireGoDown(sbire, tag);
                break;
        }
    }
    sbire.anim.duration(sbire.path.length / 5);
    sbire.anim.repeat(-1);
}

function StartSbireWithPathAnimation() {
    // gsap.to("#sbire2", {
    //     duration: 7,
    //     motionPath: {
    //         path: "#sbire2_path",
    //         align: "#sbire2_path"
    //     },
    //     ease: Linear.easeNone,
    //     repeat: -1,
    // });
}