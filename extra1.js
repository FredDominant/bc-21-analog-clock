
const getTime = function(location) {
  console.log(location);
  var xhttp = new XMLHttpRequest();
      xhttp.open('GET','https://www.amdoren.com/api/timezone.php?api_key=YFKbStr4aLzjJu68dCGcgQSWHjrskL&loc='+ location,false);
      //xhttp.setRequestHeader()
      xhttp.send();
      var response = JSON.parse(xhttp.responseText);
      console.log(response);
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
      var timeObject = {'Hour': hour, 'Minute':minute, 'Seconds':second};
      return timeObject;
}

const init = function() {
  var canvases = document.getElementsByClassName('clock');
       // console.log(canvases);
  
 /*for(var i = 0; i < canvases.length; i++)
  {
     console.log(canvases[i].id);
     //console.log(item.id);
    var ctx = canvases[i].getContext("2d");
    var radius = (canvases[i].height/2);
    radius = radius * 0.90;
    ctx.translate(radius,radius);
    drawClock(ctx, radius);    
    setInterval(function(){
       drawClock(ctx, radius);
    }, 1000);
  }*/

  Array.prototype.forEach.call(canvases, function(item){

    
    //console.log(canvases[i].id);
    var time = getTime(item.id);

    console.log(time["Hour"]);
    var ctx = item.getContext("2d");
    var radius = (item.height/2);
    radius = radius * 0.90;
    ctx.translate(radius,radius);
    drawClock(ctx, radius);
    setInterval(function(){
       drawClock(ctx, radius, time['Seconds'], time['Minute'], time['Hour']);
       time['Seconds']++;
    }, 1000);  
   

  });
}

const drawClock = function(ctx, radius, seconds, minutes, hour) {
 
  drawFace(ctx, radius);
  printNumbers(ctx,radius);
  //showMinutes(ctx,radius);
  displaySecondsHand(ctx, radius, seconds);
  displayMinuteHand(ctx, radius, seconds, minutes);
  displayHourHand(ctx, radius, hour, minutes, seconds);
}

const drawFace = function(ctx, radius) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();

  // Blue Border 
  ctx.strokeStyle = 'black';//'#bec1c6';
  ctx.lineWidth = radius*0.05;
  ctx.stroke();

// Midpoint
  ctx.beginPath();
  ctx.arc(0,0, radius*0.025, 0, 2*Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
}

const printNumbers = function(ctx,radius) {
  var rotationAngle;
  ctx.font = "bolder 17px Comic Sans MS";
  ctx.fillStyle = 'white';//'blue';
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
  // console.log("in printNumbers");
 }

 /*const showMinutes = function(ctx,radius) {
  ctx.font = "bold 7px verdana";
  ctx.fillStyle = 'white';//'black';
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
  // console.log('in showMinutes');
 }*/
 
 const displaySecondsHand = function(ctx, radius, seconds) {
 
  //var today = new Date();
  //var seconds = time['Seconds'];//today.getSeconds();
  var secondsAngle = (seconds * Math.PI/30);
  ctx.beginPath();
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 1.5;
  ctx.moveTo(0,0);
  ctx.rotate(secondsAngle);
  ctx.lineTo(0,-radius * 0.75);

  ctx.stroke();
  ctx.rotate(-secondsAngle);   
  // console.log('in displaySecondsHand');
  }

 const displayMinuteHand = function(ctx, radius, seconds, minutes) {
  //var today = new Date();
 // var minutes = time['Minute'];//today.getMinutes();
 // var seconds = time['Seconds'];//today.getSeconds();
  var secondsAngle = (seconds * Math.PI/30);
  var minutesAngle = (minutes * Math.PI/30) +  (secondsAngle * Math.PI/(180));
  ctx.beginPath();
  ctx.strokeStyle = 'white'; //'black';
  ctx.lineWidth = 3;
  ctx.moveTo(0,0);
  ctx.rotate(minutesAngle);
  ctx.lineTo(0,-radius * 0.6);
  ctx.stroke();
  ctx.rotate(-minutesAngle);
  // console.log('in displayMinuteHand');
  }

 const displayHourHand = function(ctx, radius, hour, minutes, seconds) {
  //var today = new Date();
  //var hour = time['Hour'];//today.getHours();
  //var minutes = time['Minute'];//today.getMinutes();
  //var seconds = time['Seconds'];//today.getSeconds();
  hour = hour % 12
  var hourAngle = (hour * Math.PI/6) + (minutes * Math.PI/(6 * 60)) + (seconds * Math.PI/(360 * 60));
  ctx.beginPath();
  ctx.strokeStyle = 'white';//'black';
  ctx.lineWidth = 3.3;
  ctx.moveTo(0,0);
  ctx.rotate(hourAngle);
  ctx.lineTo(0,-radius * 0.45);
  ctx.stroke();
  ctx.rotate(-hourAngle);
  // console.log('in displayHourHand');
}

 init();