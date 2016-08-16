
function Snake(scl, img) {

	this.scl = scl;
	this.img = img;

	this.init = function() {
		this.x = 0;
		this.y = 0;
		this.xSpeed = 1;
		this.ySpeed = 0;
		this.tail = [];	
	}

	this.update = function() {

		this.x += this.xSpeed * this.scl;
		this.y += this.ySpeed * this.scl;

		this.tail.shift();
		this.tail.push(createVector(this.x, this.y));

	}

	this.show = function() {
		fill(255);
		//rect(this.x, this.y, this.scl, this.scl);
		image(this.img, this.x, this.y);
		if (this.tail.length > 0) {
			for (var i = this.tail.length - 1; i >= 0; i--) {
				//rect(this.tail[i].x, this.tail[i].y, this.scl, this.scl);
				image(this.img, this.tail[i].x, this.tail[i].y);
			}
		}
	}

	this.setSpeed = function(xs, ys) {
		//check first if is going reverse
		//turning around is not allowed
		if (this.xSpeed + xs !== 0 && this.ySpeed + ys !== 0) {
			this.xSpeed = xs;
			this.ySpeed = ys;	
		}
		
	}

	this.checkFood = function(food) {
		return dist(this.x, this.y, food.x, food.y) < 1;
	}

	this.checkBoundaries = function() {
		if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
			return false;
		}

		if (this.tail.length > 4) {}
		for (var i = this.tail.length - 5; i >= 0; i--) {
			if (dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 1) {
				return false;
			}
		}

		return true;
	}

	this.grow = function() {
		this.tail.push(createVector(this.x, this.y));
	}

	this.crash = function() {
		this.init();
	}

	this.init();
}

function Food(scl, img) {
	this.scl = scl,
	this.img = img;

	this.create = function() {
		this.x = floor(random(width / this.scl)) * this.scl;
		this.y = floor(random(height / this.scl)) * this.scl;
	}

	this.show = function() {
		//fill(255, 0 , 100);
		//rect(this.x, this.y, this.scl, this.scl)
		image(img, this.x, this.y);
	}
}