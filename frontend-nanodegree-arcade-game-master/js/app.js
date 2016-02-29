// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.pos=[this.x,this.y];
	this.speed= 300;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.pos[0] += this.speed * dt;
	if(this.pos[0] >= 500) {
		var yPos = this.pos[1];
		var currentEnemy = allEnemies.indexOf(this);
		allEnemies.splice(currentEnemy,1);
		var newEnemy = new Enemy();
		newEnemy.pos = [0,yPos];
		allEnemies.push(newEnemy);
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
};

// Handles collision between each enemy and player and if player collides with any enemy then resets the position of player to initial.
Enemy.prototype.collision = function() {
	if(this.pos[0] > p1.pos[0] && this.pos[0] < p1.pos[0]+40 && this.pos[1] > p1.pos[1] && this.pos[1] < p1.pos[1]+50){
		p1.resetPlayer();
	}
}
// One player who plays the game.
var Player = function() {
	this.sprite = 'images/char-boy.png';
	this.pos = [this.x,this.y];
};

// Update the player position if player tries to reach off screen. Reset player's position to initial when player reaches Water and return true to engine.  
Player.prototype.update = function() {
	
	if(this.pos[0] >= 425) {
		this.pos[0] = 425;
	}
	else {
		if(this.pos[0] <= -25) {
		    this.pos[0] = -25;
		}
	}
	if(this.pos[1] >= 425){
		this.pos[1] = 425;
	}
	else {
		if(this.pos[1] <=-25){
			if(this.pos[1] === -25){
				this.resetPlayer();
				return true;
			}
		}
	}
	return false;
};
// Draw the player on the screen, required method for game.
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite),this.pos[0],this.pos[1]);
};
// Handle input keys movement for player.
Player.prototype.handleInput = function(pressedKey) {
	
	if(pressedKey === 'up'){
		this.pos[1] -= 75 ; 
	}
	
	if(pressedKey === 'down'){
		this.pos[1] += 75;
	}
	if(pressedKey === 'left') {
		this.pos[0] -= 75;
	}
	if(pressedKey === 'right') {
		this.pos[0] += 75;
	}
	
	
};
// Reset the player position to initial.
Player.prototype.resetPlayer = function(){
	this.pos = [200,350];
}

// Instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var e1 = new Enemy();
var e2 = new Enemy();
var e3 = new Enemy();
e1.pos = [10,60];
e2.pos = [150,150];
e3.pos = [-100,230];
var p1 = new Player();
p1.pos = [200,350];
var allEnemies = [e1,e2,e3];
var player = p1; 



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
