
//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time =  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;



var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

var myVar2 = setInterval(nowdate, 1000);

function nowdate() {
  var d = new Date();
  var date1 = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
  document.getElementById("date").innerHTML = date1.toLocaleDateString();
}

