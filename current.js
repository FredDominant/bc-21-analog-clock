var xhttp = new XMLHttpRequest();
            xhttp.open('GET','https://www.amdoren.com/api/timezone.php?api_key=F94KXsyk39HqytS2Y56Rgc67yb37fN&loc='+ 'lagos',false);
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

            var user = document.getElementById('firstOne');
            var ctx = user.getContext("2d");
            var radius = (user.height/2);
            ctx.translate(radius,radius);
            radius = radius * 1;
            drawClock();
            setInterval(drawClock,1000);
             
            function drawClock() {
              drawFace(ctx, radius);
              printNumbers(ctx,radius);
              showMinutes(ctx,radius);
              displaySecondsHand();
              displayMinuteHand();
              displayHourHand();
              second = second + 1;
              minute = minute //+ 0.01666668;
              hour = hour;
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

             function showMinutes(ctx,radius) {
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
            }
 
             function displaySecondsHand() {
                //var today = new Date();
                //var seconds = today.getSeconds();
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

             function displayMinuteHand() {
                //var today = new Date();
                //var minutes = today.getMinutes();
                minutesAngle = (minute * Math.PI/30) +  (secondsAngle * Math.PI/(180));
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
                //var today = new Date();
                //var hour = today.getHours();
                //var minutes = today.getMinutes();
                //var seconds = today.getSeconds();
                hour = hour % 12
                var hourAngle = (hour * Math.PI/6) + (minute * Math.PI/(6 * 60)) + (second * Math.PI/(360 * 60));
                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3.3;
                ctx.moveTo(0,0);
                ctx.rotate(hourAngle);
                ctx.lineTo(0,-radius * 0.45);
                ctx.stroke();
                ctx.rotate(-hourAngle);
            }
        
/*Array.prototype.forEach.call(canvases, function(item){
  
    
    //console.log(item.id);
    var ctx = canvases[i].getContext("2d");
    var radius = (canvases[i].height/2);
    radius = radius * 0.90;
    ctx.translate(radius,radius);
    drawClock(ctx, radius);    
    setInterval(function(){
       drawClock(ctx, radius);
    }, 1000);  
   

  });*/