function fun1() {
  var date = new Date();

  var hrs = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM"

  if (hrs > 12) {
    hrs -= 12;
    session = "PM"
  }
  // add 0 if less than 10-----------
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
//   ------------------------------------

  var time = hrs + " : " + min + " : " + sec + " " + session;
  document.getElementById("watch-display").innerHTML = time;
}

setInterval(fun1, 1000);

fun1();


