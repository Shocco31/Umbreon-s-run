const TilesDict = {
    "START": "floor-endpoint",
    "END": "floor-endpoint",
    "FLOOR": "floor",
    "FLOOR_WITH_WALL": "floor-with-wall",
    "WALL_HORIZONTAL": "wall-horizontal",
    "WALL_HORIZONTAL_END_LEFT": "wall-horizontal-end-left",
    "WALL_HORIZONTAL_END_RIGHT": "wall-horizontal-end-right",
    "WALL_VERTICAL": "wall-vertical",
    "WALL_VERTICAL_END_TOP": "wall-vertical-end-top",
    "WALL_VERTICAL_END_BOTTOM": "wall-vertical-end-bottom",
    "WALL_CORNER_TOP_LEFT": "wall-corner-top-left",
    "WALL_CORNER_TOP_RIGHT": "wall-corner-top-right",
    "WALL_CORNER_BOTTOM_LEFT": "wall-corner-bottom-left",
    "WALL_CORNER_BOTTOM_RIGHT": "wall-corner-bottom-right",
    "WALL_CROSSPATH": "wall-crosspath",
    "WALL_CROSSPATH_TOP": "wall-crosspath-top",
    "WALL_CROSSPATH_RIGHT": "wall-crosspath-right",
    "WALL_CROSSPATH_BOTTOM": "wall-crosspath-bottom",
    "WALL_CROSSPATH_LEFT": "wall-crosspath-left"
  };

function ShowMazeTile(x, y, type) {
    var newImage = document.createElement("img");
    newImage.setAttribute('src', '../assets/images/' + TilesDict[type] + '.png');
    newImage.setAttribute('class', 'sprite');
    newImage.setAttribute('height', 30);
    newImage.style.left = x + "px";
    newImage.style.top = y + "px";
    document.body.appendChild(newImage);
}

function GuessWhatFloorTypeIs(maze, x, y) {

}

function GuessWhatWallTypeIs(maze, x, y) {
    
}
function BuildMaze(maze) {
    for (let x of maze) {
        for (let y of maze) {
            switch (maze[x][y]) {
                case 0:
                    GuessWhatFloorTypeIs(maze, x, y);
                    break;
                case 1:
                    GuessWhatWallTypeIs(maze, x, y);
                    break;
                case 2:
                    ShowMazeTile(x, y, "START")
                    break;
                case 3:
                    ShowMazeTile(x, y, "END")
                    break;
            }
        }
    }
}

var i = 0;
while (i < 40) {
    ShowMazeTile(i * 30, i * 30, "FLOOR");
    ++i;
}