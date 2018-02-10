//TCSS491 2018

//Gameboard
function GameBoard(game) {
    Entity.call(this, game, 0, 0);
    this.player = 0;
    this.board = [];
    for (var i = 0; i < 80; i++) {
        this.board.push([]);
        for (var j = 0; j < 80; j++) {
            this.board[i].push(0);
        }
    }
}

GameBoard.prototype = new Entity();
GameBoard.prototype.constructor = GameBoard;

GameBoard.prototype.howManyNeighbors = function (x,y) {
    var output = 0;

    if((x+1 < 80) && this.board[x+1][y] == 1) {
        output++;
    }
    if((x-1 >= 0) && this.board[x-1][y] == 1) {
        output++;
    }

    if((y+1 < 80) && this.board[x][y+1] == 1) {
        output++;
    }
    if((y-1 >= 0) && this.board[x][y-1] == 1) {
        output++;
    }


    if((y+1 < 80 && x+1 < 80) && this.board[x+1][y+1] == 1) {
        output++;
    }



    if((y-1 >= 0 && x-1 >= 0) && this.board[x-1][y-1] == 1) {
        output++;
    }


    if((x+1 < 80 && y-1 >= 0) && this.board[x+1][y-1] == 1) {
        output++;
    }
    if((y+1 < 80 && x-1 >= 0) && this.board[x-1][y+1] == 1) {
        output++;
    }

    return output;
}

GameBoard.prototype.update = function () {
    if(started) {
    var updateBoard = [];
    for (var i = 0; i < 80; i++) {
        updateBoard.push([]);
        for (var j = 0; j < 80; j++) {
            updateBoard[i].push(0);
        }
    }
    
    for(var y = 0; y<80; y++) {
        for(var x = 0; x<80 ; x++) {
            var neighbors = this.howManyNeighbors(x,y);
            if(neighbors<2 || neighbors >3) {
                updateBoard[x][y] = 0;
            }
            if(neighbors == 2) {
                updateBoard[x][y] = this.board[x][y];
            }
            if(neighbors == 3) {
                updateBoard[x][y] = 1;
            }
        }
    }

    for(var y = 0; y<80; y++) {
        for(var x = 0; x<80 ; x++) {
            this.board[x][y] = updateBoard[x][y];
        }
    }}
    Entity.prototype.update.call(this);
}

GameBoard.prototype.setXY = function(x,y,value) {
    this.board[x][y] = value;
};

GameBoard.prototype.draw = function (ctx) {

    for (var x = 0; x<2010; x = x+25) {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,2000);
        ctx.stroke();
    }
    for (var x = 0; x<2010; x = x+25) {
        ctx.beginPath();
        ctx.moveTo(0,x);
        ctx.lineTo(2000,x);
        ctx.stroke();
    }
    

    for (var i = 0; i < 80; i++) {
        for (var j = 0; j < 80; j++) {
            if (this.board[i][j] === 1) {
				ctx.drawImage(ASSET_MANAGER.getAsset("./img/black.png"), i*25, j*25, 25, 25);
            }
        }
    }
}



// the "main" code begins here
var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/960px-Blank_Go_board.png");
ASSET_MANAGER.queueDownload("./img/black.png");
ASSET_MANAGER.queueDownload("./img/white.png");
ASSET_MANAGER.queueDownload("./img/tower3.png");
ASSET_MANAGER.queueDownload("./img/Attack.png");

ASSET_MANAGER.downloadAll(function () {
    console.log("starting up da sheild");
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    var gameEngine = new GameEngine();
    var gameboard = new GameBoard(gameEngine);


    //Tumbler Init
    gameboard.setXY(10,10,1);
    gameboard.setXY(11,10,1);
    gameboard.setXY(10,11,1);
    gameboard.setXY(11,11,1);
    gameboard.setXY(13,10,1);
    gameboard.setXY(14,10,1);
    gameboard.setXY(13,11,1);
    gameboard.setXY(14,11,1);
    gameboard.setXY(11,12,1);
    gameboard.setXY(11,13,1);
    gameboard.setXY(11,14,1);
    gameboard.setXY(13,12,1);
    gameboard.setXY(13,13,1);
    gameboard.setXY(13,14,1);
    gameboard.setXY(10,15,1);
    gameboard.setXY(14,15,1);
    gameboard.setXY(9,15,1);
    gameboard.setXY(15,15,1);
    gameboard.setXY(9,14,1);
    gameboard.setXY(15,14,1);
    gameboard.setXY(9,13,1); 
    gameboard.setXY(15,13,1);


    //Glider Init
    gameboard.setXY(23,5,1);
    gameboard.setXY(24,6,1);
    gameboard.setXY(24,7,1);
    gameboard.setXY(23,7,1);
    gameboard.setXY(22,7,1);


    //Gospel Glider Gun
     gameboard.setXY(9,36,1);
     gameboard.setXY(9,37,1);
     gameboard.setXY(10,37,1);
     gameboard.setXY(10,36,1);
     gameboard.setXY(18,36,1);
     gameboard.setXY(19,36,1);
     gameboard.setXY(19,37,1);
     gameboard.setXY(17,37,1);
     gameboard.setXY(17,38,1);
     gameboard.setXY(18,38,1);

     gameboard.setXY(25,38,1);
     gameboard.setXY(26,38,1);
     gameboard.setXY(25,39,1);
     gameboard.setXY(25,40,1);
     gameboard.setXY(27,39,1);


     gameboard.setXY(31,36,1);
     gameboard.setXY(31,35,1);
     gameboard.setXY(32,36,1);

     gameboard.setXY(33,35,1);
     gameboard.setXY(33,34,1);
     gameboard.setXY(32,34,1);


     gameboard.setXY(43,34,1);
     gameboard.setXY(43,35,1);
     gameboard.setXY(44,35,1);
     gameboard.setXY(44,34,1);

     gameboard.setXY(44,41,1);
     gameboard.setXY(45,41,1);
     gameboard.setXY(46,42,1);
     gameboard.setXY(44,42,1);
     gameboard.setXY(44,43,1);

     gameboard.setXY(33,46,1);
     gameboard.setXY(34,46,1);
     gameboard.setXY(35,46,1);
     gameboard.setXY(33,47,1);
     gameboard.setXY(34,48,1);




    
    console.log(gameboard.howManyNeighbors(10,10));
    console.log("GAME ENGINE " + gameEngine);
    gameEngine.addEntity(gameboard);
    gameEngine.init(ctx);
    //var attacker = new attackDude(gameEngine, ASSET_MANAGER.getAsset("./img/Attack.png"));
    //gameEngine.addEntity(attacker);
    gameEngine.start();
});



function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
                 xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                 this.frameWidth, this.frameHeight,
                 x, y,
                 this.frameWidth * this.scale,
                 this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

function attackDude(game, spritesheet) {
    //Entity.call(this, game, 45, 45);
	this.animation = new Animation(spritesheet, 536, 495, 10, 0.10, 10, true, 0.12);
	this.x = 45;
    this.y = 45;
    this.speed = 100;
    this.game = game;
    this.ctx = game.ctx;
}

attackDude.prototype = new Entity();
attackDude.prototype.constructor = attackDude;

attackDude.prototype.draw = function () {
	this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y);
}

//Change this to move into the next square in the map.
attackDude.prototype.update = function () {
    if (this.animation.elapsedTime < this.animation.totalTime * 8 / 14)
        this.x += this.game.clockTick * this.speed;
    if (this.x > 800) this.x = -230;
}


function startFunction() {
    console.log("THIS WORKLED");
    started = true;
}
var started = false;