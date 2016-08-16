var snake, food, scl = 20, paused = true, img, bg, apple;

function preload() {
	img = loadImage('texture.png');
	bg  = loadImage('bg.jpg');
	apple  = loadImage('apple.png');
}

function setup() {
	createCanvas(600,600);
	snake = new Snake(scl, img);
	food = new Food(scl, apple);
	food.create();
	frameRate(10);
}

function draw() {
	//background(90);
	clear();

	if (paused === false) {

		snake.update();

		//check if the snake eats the food
		if (snake.checkFood(food)) {
			food.create();
			snake.grow();
		}
		
		//check if the snake crashes into walls or it self
		if (!snake.checkBoundaries()) {
			snake.crash();
		}
	}

	snake.show();
	food.show();
}

function keyPressed() {
	switch(keyCode) {
		case UP_ARROW: snake.setSpeed(0,-1); break;
		case DOWN_ARROW: snake.setSpeed(0,1); break;
		case LEFT_ARROW: snake.setSpeed(-1,0); break;
		case RIGHT_ARROW: snake.setSpeed(1,0); break;
		case 32: paused = !paused;
	}
}