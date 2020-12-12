function MazeGenerator(width, height) {
    this.width = width;
    this.height = height;
    this.grid = new Uint8Array(width * height);
}

MazeGenerator.prototype.test = function(r, c) {
    return !(r <= 0 || r >= (this.height - 1) ||
        c <= 0 || c >= (this.width - 1)) &&
        !this.grid[r * this.width + c];
};

MazeGenerator.prototype.get = function(r, c) {
    return this.grid[r * this.width + c];
};

MazeGenerator.prototype.set = function(r, c, v) {
    this.grid[r * this.width + c] = v;
};

MazeGenerator.prototype.fringe = function(r, c) {
    var items = [];
    var f = [
        [-2, 0],
        [0, 2],
        [2, 0],
        [0, -2]
    ];
    for (var i = 0; i < f.length; i++) {
        if (this.test(r + f[i][0], c + f[i][1])) {
        items.push([r + f[i][0], c + f[i][1]]);
        }
    }
    return items;
};

MazeGenerator.prototype.reset = function() {
    var l = this.grid.length;
    while (l) {
        this.grid[--l] = 0;
    }
};

MazeGenerator.prototype.generate = function() {
    var stack = [];
    var cc = [1, 1];
    while (cc) {
        this.set(cc[0], cc[1], 1);
        var f = this.fringe(cc[0], cc[1]);
        if (f.length > 0) {
        var cf = f[Math.floor(Math.random() * f.length)];
        stack.push(cc);
        this.set(Math.round((cc[0] + cf[0]) / 2),
            Math.round((cc[1] + cf[1]) / 2), 1);
        cc = cf;
        } else {
        cc = stack.pop();
        }
    }
};

MazeGenerator.prototype.toString = function() {
    var str = '';
    for (var r = 0; r < this.height; r++) {
        str += '\n';
        for (var c = 0; c < this.width; c++) {
        str += this.grid[r * this.width + c];
        }
    }
    return str;
};

// EXAMPLE OF USAGE :

// const STARTING_POINT = "2";
// const ENDING_POINT = "3";
// var generator = new MazeGenerator(width, height);
// generator.generate();
// var maze = generator.toString();
// maze = maze.replace(/(\r\n|\n|\r)/gm, "");
// maze = maze.replaceAt(width + 1, STARTING_POINT);
// maze = maze.replaceAt((height - 1) * (width - 1) + (width - 1), ENDING_POINT);
