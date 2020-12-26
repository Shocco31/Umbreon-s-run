const maze = [
    [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0],
    [0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0],
    [0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0],
    [0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0],
    [0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0],
    [0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0],
    [0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,4,0],
    [0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0],
    [0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0],
    [0,4,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,4,1,0,1,1,1,1,1,1,0,1,1,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0],
    [0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0],
    [0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0],
    [0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0],
    [0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0],
    [0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0,0,0,0,0,1,1,0,1,0],
    [0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,4,0],
    [0,1,0,1,1,1,1,0,0,1,4,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0],
    [0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,6,0],
    [0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,3,0]
];

const width = maze[0].length;
const height = maze.length;
const tileMaxSize = '40px';

const WALL = 0;
const FLOOR = 1;
const START = 2;
const END = 3;
const WRONG_BUTTON = 4;
const GOOD_BUTTON = 5;
const LOCK = 6;

// When the player walks on a the good button
function RevealGoodButton(x, y) {
    // Put a green square on the floor
    var tile = document.getElementById('tile' + x + '-' + y)
    tile.setAttribute('src', './assets/images/floor-good-button.png')

    // Remove the wall blocking the exit
    var wall_to_remove = document.getElementById('tile38-23')
    wall_to_remove.setAttribute('src', './assets/images/floor-with-wall.png')
    maze[23][38] = FLOOR;

    // Set the green button a normal floor to not repeat the noise
    maze[Umbreon.coords.y][Umbreon.coords.x] = FLOOR;
}

// When the player walks on a wrong button
function RevealWrongButton(x, y) {
    // Put a red square on the floor
    var tile = document.getElementById('tile' + x + '-' + y)
    tile.setAttribute('src', './assets/images/floor-wrong-button.png')

    // Set the red button a normal floor to not repeat the noise
    maze[Umbreon.coords.y][Umbreon.coords.x] = FLOOR;
}

function ChooseGoodButton() {
    let buttons = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (maze[y][x] == WRONG_BUTTON) {
                buttons.push({x, y});
            }
        }
    }

    // Set a random button as the 'Good button'
    const good_btn = buttons[Math.floor(Math.random() * buttons.length)];
    maze[good_btn.y][good_btn.x] = GOOD_BUTTON;
}

// Responsiveness
function MapResize() {
    const horizScrollBarHeight = 18;
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

// Put the sprite on the screen
function CreateTile(x, y, type) {
    // Creation of a row
    if (x == 0) {
        var newRow = document.createElement("div");
        newRow.setAttribute('id', 'row' + y);
        newRow.setAttribute('width', '100%');
        newRow.style.maxHeight = tileMaxSize;
        newRow.style.height = (100 / height) + "%";
        document.getElementById("map").appendChild(newRow);
    }
    // Creation of a tile
    var newImage = document.createElement("img");
    newImage.setAttribute('id', 'tile' + x + '-' + y)
    newImage.setAttribute('src', './assets/images/' + type + '.png');
    newImage.setAttribute('class', 'sprite');
    newImage.style.width = (100 / width) + "%";
    newImage.style.maxWidth = tileMaxSize;
    document.getElementById("row" + y).appendChild(newImage);
}

// Pick the appropriate sprite for each 'wall' tile
function GuessWhatWallTypeIs(tile) {
    if (tile.top != WALL && tile.bottom != WALL && tile.left == WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-horizontal");
    }
    else if (tile.top != WALL && tile.bottom != WALL && tile.left != WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-horizontal-end-left");
    }
    else if (tile.top != WALL && tile.bottom != WALL && tile.left == WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-horizontal-end-right");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left != WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-vertical");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left != WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-vertical-end-bottom");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left != WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-vertical-end-top");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left != WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-corner-bottom-left");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left != WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-corner-top-left");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left == WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-corner-top-right");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left == WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-corner-bottom-right");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left == WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-crosspath-top");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left != WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-crosspath-right");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left == WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-crosspath-bottom");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left == WALL && tile.right != WALL) {
        CreateTile(tile.x, tile.y, "wall-crosspath-left");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left == WALL && tile.right == WALL) {
        CreateTile(tile.x, tile.y, "wall-crosspath");
    }
}

// Pick the appropriate sprite for each 'floor' tile
function GuessWhatFloorTypeIs(tile) {
    if (tile.value == START || tile.value == END) {
        CreateTile(tile.x, tile.y, "floor-entrance-exit")
    }
    else if (tile.value == LOCK) {
        CreateTile(tile.x, tile.y, "lock");
    }
    else if (tile.value == WRONG_BUTTON) {
        CreateTile(tile.x, tile.y, "floor-button")
    }
    else if (tile.top == WALL) {
        CreateTile(tile.x, tile.y, "floor-with-wall");
    }
    else {
        CreateTile(tile.x, tile.y, "floor");
    }
}

// Main loop for the maze construction
function BuildMaze(m) {
    let y = 0;
    while (y < height) {
        let x = 0;
        while (x < width) {
            var tile = {
                x,
                y,
                top: y - 1 >= 0 ? m[y - 1][x] : null,
                bottom: y + 1 < height ? m[y + 1][x] : null,
                left: x - 1 >= 0 ? m[y][x - 1] : null,
                right: x + 1 < width ? m[y][x + 1] : null,
                value: m[y][x]
            };
            if (tile.value == WALL) {
                GuessWhatWallTypeIs(tile);
            }
            else {
                GuessWhatFloorTypeIs(tile);
            }
            ++x;
        }
        ++y;
    }
    ChooseGoodButton();
}

// Maze construction call
BuildMaze(maze);