var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var img = canvas.toDataURL("image/png");

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

context.beginPath();
var putPoint = function(e) {
	if (dragging) {
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var engage = function(e) {
	dragging = true;
	putPoint(e);
}

var disengage = function() {
	dragging = false;
	context.beginPath();
}

var download = function(e) {
	if (e.keyCode == 0 || e.keyCode == 32) {
		if (canvas.offsetWidth > 0 || canvas.offsetHeight > 0) {
			canvas.style.display = 'none';
			var dataURL = canvas.toDataURL();
			document.getElementById('canvasImg').src = dataURL;
		} else {
			canvas.style.display = 'block';
		}
	}
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);
addEventListener('keydown', download);