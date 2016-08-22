function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);

    if (h < 12) {
     greet = "Morning,";
    } else if (h < 18) {
     greet = "Afternoon,";
    } else {
     greet = "Evening,";
    }

   document.getElementById("hello").innerHTML = "Good " + greet + " Luca";

   var today = new Date();
   var dd = today.getDate();
   var mm = today.getMonth()+1; //January is 0!
   var yyyy = today.getFullYear();

   if(dd<10) {
       dd='0'+dd
   }

   if(mm<10) {
       mm='0'+mm
   }

   today = mm+'/'+dd+'/'+yyyy;
   document.getElementById("date").innerHTML = today;
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
