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
    [0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0],
    [0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,3,0]
    
];

const width = maze[0].length;
const height = maze.length;
const tileMaxSize = '40px';

const WALL = 0;
const FLOOR = 1;
const START = 2;
const END = 3;
const FAKE_END = 4;

function RevealFakeEnd(x, y) {
    var tile = document.getElementById('tile' + x + '-' + y)
    tile.setAttribute('src', '../assets/images/floor-fakepoint.png')
}

function ShowMazeTile(x, y, type) {
    if (x == 0) {
        var newRow = document.createElement("div");
        newRow.setAttribute('id', 'row' + y);
        newRow.setAttribute('width', '100%');
        newRow.style.maxHeight = tileMaxSize;
        newRow.style.height = (100 / height) + "%";
        document.getElementById("map").appendChild(newRow);
    }
    var newImage = document.createElement("img");
    newImage.setAttribute('id', 'tile' + x + '-' + y)
    newImage.setAttribute('src', '../assets/images/' + type + '.png');
    newImage.setAttribute('class', 'sprite');
    newImage.style.width = (100 / width) + "%";
    newImage.style.maxWidth = tileMaxSize;
    document.getElementById("row" + y).appendChild(newImage);
}

function GuessWhatWallTypeIs(tile) {
    if (tile.top != WALL && tile.bottom != WALL && tile.left == WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-horizontal");
    }
    else if (tile.top != WALL && tile.bottom != WALL && tile.left != WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-horizontal-end-left");
    }
    else if (tile.top != WALL && tile.bottom != WALL && tile.left == WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-horizontal-end-right");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left != WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-vertical");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left != WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-vertical-end-bottom");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left != WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-vertical-end-top");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left != WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-corner-bottom-left");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left != WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-corner-top-left");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left == WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-corner-top-right");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left == WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-corner-bottom-right");
    }
    else if (tile.top == WALL && tile.bottom != WALL && tile.left == WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-crosspath-top");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left != WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-crosspath-right");
    }
    else if (tile.top != WALL && tile.bottom == WALL && tile.left == WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-crosspath-bottom");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left == WALL && tile.right != WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-crosspath-left");
    }
    else if (tile.top == WALL && tile.bottom == WALL && tile.left == WALL && tile.right == WALL) {
        ShowMazeTile(tile.x, tile.y, "wall-crosspath");
    }
}

function GuessWhatFloorTypeIs(tile) {
    if (tile.value == START) {
        ShowMazeTile(tile.x, tile.y, "floor-startpoint")
    }
    else if (tile.value == END || tile.value == FAKE_END) {
        ShowMazeTile(tile.x, tile.y, "floor-endpoint")
    }
    else if (tile.top == WALL) {
        ShowMazeTile(tile.x, tile.y, "floor-with-wall");
    }
    else {
        ShowMazeTile(tile.x, tile.y, "floor");
    }
}

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
}

BuildMaze(maze);