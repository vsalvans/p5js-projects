var video, scl = 10;

function setup() {
	createCanvas(640, 480);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width/scl, height/scl);
}

function draw() {
	background(51);
	video.loadPixels();
	for (var i = 0; i < video.height; i++) {
		for (var j = 0; j < video.width; j++) {
			var index = (video.width - j - 1 + (i * video.width)) * 4;
			var r = video.pixels[index + 0];
			var g = video.pixels[index + 1];
			var b = video.pixels[index + 2];

			var bright = (r + g + b) / 3;

			fill(r,g,b);
			noStroke();
			ellipseMode(CENTER);
			rectMode(CENTER);
			r = map(bright, 0, 255, 0, scl * 2);
			if (r > (scl / 2)) {
				rect(j*scl, i*scl, r, r);
			} else {
				ellipse(j*scl, i*scl, r, r);
			}
			

		}
	}
}