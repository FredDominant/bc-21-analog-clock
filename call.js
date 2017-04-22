function time() {
	var userInput = document.getElementById('search').value;
	if (userInput.length < 1) {
		alert('Text field is currently empty.');
	} else {
			var xhttp = new XMLHttpRequest();
			xhttp.open('GET','https://www.amdoren.com/api/timezone.php?api_key=QyAk9kuf9Wwkzn54MWUFSWE6usANcR&loc='+ userInput,false);
			xhttp.send();
			var response = JSON.parse(xhttp.responseText);
			var timeZone = response['timezone'];
			var timeStamp = response['time'];
			timeStamp = timeStamp.split(' ');
			var time = timeStamp[1];
			var hour = (time[0] + time[1]);
			hour = parseInt(hour);
			var minute = (time[3] + time[4]);
			minute = parseInt(minute);
			var second = (time[6] + time[7]);
			second = parseInt(second);

			// To get User-searched location and time zone  
			var newTitle = document.getElementById('searched');
			var newZone = document.getElementById('searchZone');
			newZone.innerHTML = timeZone;
			userInput = (userInput[0].toUpperCase() + userInput.slice(1));
			newTitle.innerHTML = userInput;

			// This draws on HTML canvas with id 'userOne'
			var user = document.getElementById('userOne');
			var ctx = user.getContext("2d");
			var radius = (user.height/2);
			ctx.translate(radius,radius);
			radius = radius * 1;
			drawClock();

			// This function draws the clock at every second
			setInterval(drawClock,1000);
			
			// This function calls other functions that help draw complete clock
			function drawClock() {
			  drawFace(ctx, radius);
			  printNumbers(ctx,radius);
			  displaySecondsHand();
			  displayMinuteHand();
			  displayHourHand();
			  second = second + 1;
			  minute = minute
			  hour = hour;
			 }

			 // This function draws the circular face 
			function drawFace(ctx, radius) {
			  ctx.beginPath();
			  ctx.arc(0, 0, radius, 0, 2*Math.PI);
			  ctx.fillStyle = 'black';
			  ctx.fill();

			  // black Border 
			  ctx.strokeStyle = 'black';
			  ctx.lineWidth = radius*0.05;
			  ctx.stroke();

			  // Midpoint
			  ctx.beginPath();
			  ctx.arc(0,0, radius*0.05, 0, 2*Math.PI);
			  ctx.fillStyle = 'white';
			  ctx.fill();
			}

			// This function prints numbers on the clock's face
			function printNumbers(ctx,radius) {
			  var rotationAngle;
			  ctx.font = "bolder 17px Comic Sans MS";
			  ctx.fillStyle = 'white';
			  ctx.textBaseline="middle";
			  ctx.textAlign="center";
			  for(var num = 1; num < 13; num++) {
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

			 /*function showMinutes(ctx,radius) {
			  ctx.font = "bold 7px verdana";
			  ctx.fillStyle = 'black'
			  ctx.textBaseline="middle";
			  ctx.textAlign="center";
			  for(var i = 0; i < 60; i++) {
			    var minutesAngle = i * Math.PI / 30;
			    ctx.rotate(minutesAngle);
			    ctx.translate(0, -radius * 0.7);
			    ctx.rotate(-minutesAngle);
			    ctx.fillText(".", 0, 0);
			    ctx.rotate(minutesAngle);
			    ctx.translate(0, radius* 0.7);
			    ctx.rotate(-minutesAngle);
			  }
			}*/
 
 			// this function draws the seconds hand
			 function displaySecondsHand() {
			 	secondsAngle = (second * Math.PI/30);
			 	ctx.beginPath();
			 	ctx.strokeStyle = 'red'
			 	ctx.lineWidth = 1.5;
			 	ctx.moveTo(0,0);
			 	ctx.rotate(secondsAngle);
			 	ctx.lineTo(0,-radius * 0.75);
			 	ctx.stroke();
			 	ctx.rotate(-secondsAngle);		 
			 }

			 // This function draws the Minutes hand
			 function displayMinuteHand() {
			 	minutesAngle = (minute * Math.PI/30) +  (secondsAngle * Math.PI/(180));
			 	ctx.beginPath();
			 	ctx.strokeStyle = 'white';
			 	ctx.lineWidth = 3;
			 	ctx.moveTo(0,0);
			 	ctx.rotate(minutesAngle);
			 	ctx.lineTo(0,-radius * 0.6);
			 	ctx.stroke();
			 	ctx.rotate(-minutesAngle);
			}
			 	
			// This function draws the Hour
			 function displayHourHand() {
			 	hour = hour % 12;
			 	var hourAngle = (hour * Math.PI/6) + (minute * Math.PI/(6 * 60)) + (second * Math.PI/(360 * 60));
				ctx.beginPath();
				ctx.strokeStyle = 'white';
				ctx.lineWidth = 3.3;
				ctx.moveTo(0,0);
				ctx.rotate(hourAngle);
				ctx.lineTo(0,-radius * 0.45);
				ctx.stroke();
				ctx.rotate(-hourAngle);
			}
		}

	}


			

