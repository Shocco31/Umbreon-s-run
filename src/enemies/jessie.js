var jessieCoords = {
    x: 17,
    y: 6
};

function jessieGoLeft() {
    var map = document.getElementById("map");
    jessie_tl.set("#jessie", { attr: { src: "../assets/images/jessie/jesl1.png" } })
    .to("#jessie", {
        x: (jessieCoords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesl3.png" } })
    .to("#jessie", {
        x: (jessieCoords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesl2.png" } })
    jessieCoords.x--;
}

function jessieGoRight() {
    var map = document.getElementById("map");
    jessie_tl.set("#jessie", { attr: { src: "../assets/images/jessie/jesr1.png" } })
    .to("#jessie", {
        x: (jessieCoords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesr3.png" } })
    .to("#jessie", {
        x: (jessieCoords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesr2.png" } })
    jessieCoords.x++;
}

function jessieGoUp() {
    var map = document.getElementById("map");
    jessie_tl.set("#jessie", { attr: { src: "../assets/images/jessie/jesu1.png" } })
    .to("#jessie", {
        y: (jessieCoords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesu3.png" } })
    .to("#jessie", {
        y: (jessieCoords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesu2.png" } })
    jessieCoords.y--;
}

function jessieGoDown() {
    var map = document.getElementById("map");
    jessie_tl.set("#jessie", { attr: { src: "../assets/images/jessie/jesd1.png" } })
    .to("#jessie", {
        y: (jessieCoords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesd3.png" } })
    .to("#jessie", {
        y: (jessieCoords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#jessie", { attr: { src: "../assets/images/jessie/jesd2.png" } })
    jessieCoords.y++;
}

function StartJessieAnimation() {
    var path = "RDLU";
    for (let direction of path) {
        switch (direction) {
            case 'L':
                jessieGoLeft();
                break;
            case 'R':
                jessieGoRight();
                break;            
            case 'U':
                jessieGoUp();
                break;            
            case 'D':
                jessieGoDown();
                break;
        }
    }
    jessie_tl.duration(3);
    jessie_tl.repeat(-1);
}