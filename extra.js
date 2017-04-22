var canvasTwo = document.getElementById('london');
var ctx2 = canvasTwo.getContext("2d");
//console.log("ctx2: ", ctx2);
var radiusTwo = (canvasTwo.height/2);
ctx2.translate(radiusTwo,radiusTwo);
radiusTWo = radiusTwo * 0.90;
drawClock();
setInterval(drawClock,1000);
 
function drawClock() {
 
  drawFace(ctx2, radiusTwo);
  printNumbers(ctx2,radiusTwo);
  showMinutes(ctx2,radiusTwo);
  displaySecondsHand(ctx2, radiusTwo);
  displayMinuteHand(ctx2, radiusTwo);
  displayHourHand(ctx2, radiusTwo);
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
  console.log("in printNumbers");
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
 
 function displaySecondsHand(ctx, radius) {
 
  var today = new Date();
  var seconds = today.getSeconds();
  var secondsAngle = (seconds * Math.PI/30);
  ctx.beginPath();
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 1.5;
  ctx.moveTo(0,0);
  ctx.rotate(secondsAngle);
  ctx.lineTo(0,-radius * 0.75);

  ctx.stroke();
  ctx.rotate(-secondsAngle);   
  console.log("i m int the displaySecondsHand for london");
 }

 function displayMinuteHand(ctx, radius) {
  var today = new Date();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var secondsAngle = (seconds * Math.PI/30);
  var minutesAngle = (minutes * Math.PI/30) +  (secondsAngle * Math.PI/(180));
  ctx2.beginPath();
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 3;
  ctx2.moveTo(0,0);
  ctx2.rotate(minutesAngle);
  ctx2.lineTo(0,-radius * 0.6);
  ctx2.stroke();
  ctx2.rotate(-minutesAngle);
   console.log("i m int the displayMinuteHand for london");
 
 }

 function displayHourHand(ctx, radius) {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  hour = hour % 12
  var hourAngle = (hour * Math.PI/6) + (minutes * Math.PI/(6 * 60)) + (seconds * Math.PI/(360 * 60));
  ctx2.beginPath();
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 3.3;
  ctx2.moveTo(0,0);
  ctx2.rotate(hourAngle);
  ctx2.lineTo(0,-radius * 0.45);
  ctx2.stroke();
  ctx2.rotate(-hourAngle);
   console.log("i m int the displayHourHand for london");
 
 }
 /*// Function to draw clock
 function drawClock() {
  
    /*ctx2.arc(0,0,radius,0,2 * Math.PI);
    ctx2.fillStyle = 'white';
    ctx2.fill();*/
    /*function drawFace(ctx2,radius) {
  var grad;

    ctx2.beginPath();
    ctx2.arc(0, 0, radius, 0, 2*Math.PI);
    ctx2.fillStyle = 'white';
    ctx2.fill();

    grad = ctx2.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx2.strokeStyle = grad;
    ctx2.lineWidth = radius*0.1;
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx2.fillStyle = '#333';
    ctx2.fill();
}
 }*/

// To draw a circular clock's body
/*const clockBody = function () {
  ctx2.fillStyle = 'white' //"#cbd1db";
  radius = radius * 0.85;
  ctx2.arc(0,0,radius,0,2*Math.PI);
  ctx2.fill();

// To draw Clock's face
const clockFace = function(ctx2,radius) {
  ctx2.beginPath();
  //radius = radius * 0.9;
  ctx2.arc(0,0,radius,0,2 * Math.PI);
  ctx2.fillStyle = "#cbd1db";
  ctx2.fill();
   // Adding radial gradient to clock body
   ctx2.beginPath();
   ctx2.arc(0,0,radius *1.25,0,2 * Math.PI);
   ctx2.fillStyle('black');
   ctx2.fill();
   var gradient = ctx2.createRadialGradient(0,0,radius * 0.5,0,0,radius * 1.25);
   gradient.addColorStop(0, 'black');
   gradient.addColorStop(0.5, 'white');
   gradient.addColorStop(0.5, 'black');
   ctx2.strokeStyle = gradient;
   ctx2.lineWidth = radius * 0.05;
   ctx2.stroke();
  }
}

clockBody();*/
//ctx2.fillRect(0,0,100,60);

/*var canvas = document.getElementById("firstOne");
   var ctx2 = canvas.getContext("2d");
   var face = ctx2.createLinearGradient(0,200,200,200);
   face.addColorStop(0,'green');
   face.addColorStop(0.3,'white');
   face.addColorStop(0.9,'green');
   ctx2.fillStyle = face;
   ctx2.fillRect(0,0,200,200);*/
/*var xhttp = new XMLHttpRequest();
      xhttp.open('GET','https://www.amdoren.com/api/timezone.php?api_key=6NUDakLXy2DUQiudHjuWNsUCSBbMc3&loc=beijing',false);
      //xhttp.setRequestHeader()
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
      //alert('Hour is '+hour);
      //alert('Minute is '+minute);
      //alert('Second is '+second);

      var user = document.getElementById('london');
      var ctx2 = user.getContext("2d");
      var radius = (user.height/2);
      ctx2.translate(radius,radius);
      radius = radius * 1;
      drawClock();
      setInterval(drawClock,1000);
       
      function drawClock() {
        drawFace(ctx2, radius);
        printNumbers(ctx2,radius);
        showMinutes(ctx2,radius);
        displaySecondsHand();
        displayMinuteHand();
        displayHourHand();
        second = second + 1;
        minute = minute //+ 0.01666668;
        hour = hour;
       }
        

      function drawFace(ctx2, radius) {
        ctx2.beginPath();
        ctx2.arc(0, 0, radius, 0, 2*Math.PI);
        ctx2.fillStyle = 'white';
        ctx2.fill();

        // Blue Border 
        ctx2.strokeStyle = '#bec1c6';
        ctx2.lineWidth = radius*0.05;
        ctx2.stroke();

      // Midpoint
        ctx2.beginPath();
        ctx2.arc(0,0, radius*0.025, 0, 2*Math.PI);
        ctx2.fillStyle = 'black';
        ctx2.fill();
      }

      function printNumbers(ctx2,radius) {
        var rotationAngle;
        ctx2.font = "bolder 17px Comic Sans MS";
        ctx2.fillStyle = 'blue';
        ctx2.textBaseline="middle";
        ctx2.textAlign="center";
        for(var num = 1; num < 13; num++){
          rotationAngle = num * Math.PI / 6;
          ctx2.rotate(rotationAngle);
          ctx2.translate(0, -radius * 0.85);
          ctx2.rotate(-rotationAngle);
          ctx2.fillText(num.toString(), 0, 0);
          ctx2.rotate(rotationAngle);
          ctx2.translate(0, radius*0.85);
          ctx2.rotate(-rotationAngle);
        }
      }

       function showMinutes(ctx2,radius) {
        ctx2.font = "bold 7px verdana";
        ctx2.fillStyle = 'black'
        ctx2.textBaseline="middle";
        ctx2.textAlign="center";
        for(var i = 0; i < 60; i++){
          var minutesAngle = i * Math.PI / 30;
          ctx2.rotate(minutesAngle);
          ctx2.translate(0, -radius * 0.7);
          ctx2.rotate(-minutesAngle);
          ctx2.fillText(".", 0, 0);
          ctx2.rotate(minutesAngle);
          ctx2.translate(0, radius* 0.7);
          ctx2.rotate(-minutesAngle);
        }
      }
 
       function displaySecondsHand() {
        //var today = new Date();
        //var seconds = today.getSeconds();
        secondsAngle = (second * Math.PI/30);
        ctx2.beginPath();
        ctx2.strokeStyle = 'red'
        ctx2.lineWidth = 1.5;
        ctx2.moveTo(0,0);
        ctx2.rotate(secondsAngle);
        ctx2.lineTo(0,-radius * 0.75);
        ctx2.stroke();
        ctx2.rotate(-secondsAngle);
           
       }

       function displayMinuteHand() {
        //var today = new Date();
        //var minutes = today.getMinutes();
        minutesAngle = (minute * Math.PI/30) +  (secondsAngle * Math.PI/(180));
        ctx2.beginPath();
        ctx2.strokeStyle = 'black';
        ctx2.lineWidth = 3;
        ctx2.moveTo(0,0);
        ctx2.rotate(minutesAngle);
        ctx2.lineTo(0,-radius * 0.6);
        ctx2.stroke();
        ctx2.rotate(-minutesAngle);
      }
        

       function displayHourHand() {
        //var today = new Date();
        //var hour = today.getHours();
        //var minutes = today.getMinutes();
        //var seconds = today.getSeconds();
        hour = hour % 12
        var hourAngle = (hour * Math.PI/6) + (minute * Math.PI/(6 * 60)) + (second * Math.PI/(360 * 60));
        ctx2.beginPath();
        ctx2.strokeStyle = 'black';
        ctx2.lineWidth = 3.3;
        ctx2.moveTo(0,0);
        ctx2.rotate(hourAngle);
        ctx2.lineTo(0,-radius * 0.45);
        ctx2.stroke();
        ctx2.rotate(-hourAngle);
    }*/