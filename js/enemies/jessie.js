function jessieGoLeft(jessie) {
    var map = document.getElementById("map");
    jessie.anim.set("#jessie", { attr: { src: "./assets/images/jessie/jesl1.png" } })
    .to("#jessie", {
        x: (jessie.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 2)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesl3.png" } })
    .to("#jessie", {
        x: (jessie.coords.x - 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesl2.png" } })
    jessie.coords.x--;
}

function jessieGoRight(jessie) {
    var map = document.getElementById("map");
    jessie.anim.set("#jessie", { attr: { src: "./assets/images/jessie/jesr1.png" } })
    .to("#jessie", {
        x: (jessie.coords.x + 1) * (map.offsetWidth / width) - (map.offsetWidth / width / 2)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesr3.png" } })
    .to("#jessie", {
        x: (jessie.coords.x + 1) * (map.offsetWidth / width) + (map.offsetWidth / width / 10)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesr2.png" } })
    jessie.coords.x++;
}

function jessieGoUp(jessie) {
    var map = document.getElementById("map");
    jessie.anim.set("#jessie", { attr: { src: "./assets/images/jessie/jesu1.png" } })
    .to("#jessie", {
        y: (jessie.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 2)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesu3.png" } })
    .to("#jessie", {
        y: (jessie.coords.y - 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesu2.png" } })
    jessie.coords.y--;
}

function jessieGoDown(jessie) {
    var map = document.getElementById("map");
    jessie.anim.set("#jessie", { attr: { src: "./assets/images/jessie/jesd1.png" } })
    .to("#jessie", {
        y: (jessie.coords.y + 1) * (map.offsetHeight / height) - (map.offsetHeight / height / 2)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesd3.png" } })
    .to("#jessie", {
        y: (jessie.coords.y + 1) * (map.offsetHeight / height) + (map.offsetHeight / height / 10)
    })
    .set("#jessie", { attr: { src: "./assets/images/jessie/jesd2.png" } })
    jessie.coords.y++;
}

// Calls the appropriate method accordingly to the 'path' string : each letter will call a method to move the entity
function StartJessieAnimation(jessie) {
    for (let direction of jessie.path) {
        switch (direction) {
            case 'L':
                jessieGoLeft(jessie);
                break;
            case 'R':
                jessieGoRight(jessie);
                break;            
            case 'U':
                jessieGoUp(jessie);
                break;            
            case 'D':
                jessieGoDown(jessie);
                break;
        }
    }
    jessie.anim.duration(jessie.path.length / 5);
    jessie.anim.repeat(-1);
}