var canvasOne = document.getElementById('firstOne');
var ctx = canvasOne.getContext("2d");
var radius = (canvasOne.height/2);
ctx.translate(radius,radius);
radius = radius * 0.90;
drawClock();
setInterval(drawClock,1000);
 
function drawClock() {
  drawFace(ctx, radius);
  printNumbers(ctx,radius);
  showMinutes(ctx,radius);
  displaySecondsHand();
  displayMinuteHand();
  displayHourHand();
}

function drawFace(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  // Blue Border 
  ctx.strokeStyle = '#bec1c6';
  ctx.lineWidth = radius*0.05;
  ctx.stroke();

// Midpoint
  ctx.beginPath();
  ctx.arc(0,0, radius*0.025, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

function printNumbers(ctx,radius) {
  var rotationAngle;
  ctx.font = "bolder 17px Comic Sans MS";
  ctx.fillStyle = 'blue';
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(var num = 1; num < 13; num++){
    rotationAngle = num * Math.PI / 6;
    ctx.rotate(rotationAngle);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-rotationAngle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(rotationAngle);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-rotationAngle);
  }
 }

 function showMinutes(ctx,radius) {
  ctx.font = "bold 7px verdana";
  ctx.fillStyle = 'black'
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(var i = 0; i < 60; i++){
    var minutesAngle = i * Math.PI / 30;
    ctx.rotate(minutesAngle);
    ctx.translate(0, -radius * 0.7);
    ctx.rotate(-minutesAngle);
    ctx.fillText(".", 0, 0);
    ctx.rotate(minutesAngle);
    ctx.translate(0, radius* 0.7);
    ctx.rotate(-minutesAngle);
  }
 }
 
 function displaySecondsHand() {
 	var today = new Date();
 	var seconds = today.getSeconds();
 	secondsAngle = (seconds * Math.PI/30);
 	ctx.beginPath();
 	ctx.strokeStyle = 'red'
 	ctx.lineWidth = 1.5;
 	ctx.moveTo(0,0);
 	ctx.rotate(secondsAngle);
 	ctx.lineTo(0,-radius * 0.75);
 	ctx.stroke();
 	ctx.rotate(-secondsAngle);	 
 }

 function displayMinuteHand() {
 	var today = new Date();
 	var minutes = today.getMinutes();
 	minutesAngle = (minutes * Math.PI/30) +  (secondsAngle * Math.PI/(180));
 	ctx.beginPath();
 	ctx.strokeStyle = 'black';
 	ctx.lineWidth = 3;
 	ctx.moveTo(0,0);
 	ctx.rotate(minutesAngle);
 	ctx.lineTo(0,-radius * 0.6);
 	ctx.stroke();
 	ctx.rotate(-minutesAngle);
 }

 function displayHourHand() {
 	var today = new Date();
 	var hour = today.getHours();
 	var minutes = today.getMinutes();
 	var seconds = today.getSeconds();
 	hour = hour % 12
 	var hourAngle = (hour * Math.PI/6) + (minutes * Math.PI/(6 * 60)) + (seconds * Math.PI/(360 * 60));
	ctx.beginPath();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 3.3;
	ctx.moveTo(0,0);
	ctx.rotate(hourAngle);
	ctx.lineTo(0,-radius * 0.45);
	ctx.stroke();
	ctx.rotate(-hourAngle);
 }
 /*// Function to draw clock
 function drawClock() {
 	
 		/*ctx.arc(0,0,radius,0,2 * Math.PI);
 		ctx.fillStyle = 'white';
 		ctx.fill();*/
 		/*function drawFace(ctx,radius) {
 	var grad;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
 }*/

// To draw a circular clock's body
/*const clockBody = function () {
	ctx.fillStyle = 'white' //"#cbd1db";
	radius = radius * 0.85;
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fill();

// To draw Clock's face
const clockFace = function(ctx,radius) {
	ctx.beginPath();
	//radius = radius * 0.9;
	ctx.arc(0,0,radius,0,2 * Math.PI);
	ctx.fillStyle = "#cbd1db";
	ctx.fill();
	 // Adding radial gradient to clock body
	 ctx.beginPath();
	 ctx.arc(0,0,radius *1.25,0,2 * Math.PI);
	 ctx.fillStyle('black');
	 ctx.fill();
	 var gradient = ctx.createRadialGradient(0,0,radius * 0.5,0,0,radius * 1.25);
	 gradient.addColorStop(0, 'black');
	 gradient.addColorStop(0.5, 'white');
	 gradient.addColorStop(0.5, 'black');
	 ctx.strokeStyle = gradient;
	 ctx.lineWidth = radius * 0.05;
	 ctx.stroke();
	}
}

clockBody();*/
//ctx.fillRect(0,0,100,60);

/*var canvas = document.getElementById("firstOne");
	 var ctx = canvas.getContext("2d");
	 var face = ctx.createLinearGradient(0,200,200,200);
	 face.addColorStop(0,'green');
	 face.addColorStop(0.3,'white');
	 face.addColorStop(0.9,'green');
	 ctx.fillStyle = face;
	 ctx.fillRect(0,0,200,200);*/