function SbireGoLeft(tag, sbire_tl, sbire_coords) {
    var map = document.getElementById("map");

    sbire_tl.set(tag, { attr: { src: "../assets/images/sbire/sbil1.png" } })
    .to(tag, {
        x: (sbire_coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbil3.png" } })
    .to(tag, {
        x: (sbire_coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbil2.png" } })
    sbire_coords.x--;
}

function SbireGoRight(tag, sbire_tl, sbire_coords) {
    var map = document.getElementById("map");

    sbire_tl.set(tag, { attr: { src: "../assets/images/sbire/sbir1.png" } })
    .to(tag, {
        x: (sbire_coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbir3.png" } })
    .to(tag, {
        x: (sbire_coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbir2.png" } })
    sbire_coords.x++;
}

function SbireGoUp(tag, sbire_tl, sbire_coords) {
    var map = document.getElementById("map");

    sbire_tl.set(tag, { attr: { src: "../assets/images/sbire/sbiu1.png" } })
    .to(tag, {
        y: (sbire_coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbiu3.png" } })
    .to(tag, {
        y: (sbire_coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbiu2.png" } })
    sbire_coords.y--;
}

function SbireGoDown(tag, sbire_tl, sbire_coords) {
    var map = document.getElementById("map");

    sbire_tl.set(tag, { attr: { src: "../assets/images/sbire/sbid1.png" } })
    .to(tag, {
        y: (sbire_coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbid3.png" } })
    .to(tag, {
        y: (sbire_coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set(tag, { attr: { src: "../assets/images/sbire/sbid2.png" } })
    sbire_coords.y++;
}

function StartSbireAnimation(sbire_number, sbire_tl, sbire_coords) {
    var path = "RDLU";
    var tag = "#sbire" + sbire_number;
    for (let direction of path) {
        switch (direction) {
            case 'L':
                SbireGoLeft(tag, sbire_tl, sbire_coords);
                break;
            case 'R':
                SbireGoRight(tag, sbire_tl, sbire_coords);
                break;
            case 'U':
                SbireGoUp(tag, sbire_tl, sbire_coords);
                break;
            case 'D':
                SbireGoDown(tag, sbire_tl, sbire_coords);
                break;
        }
    }
    sbire_tl.duration(3);
    sbire_tl.repeat(-1);
}