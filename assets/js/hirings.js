var hirings = {};

$.getJSON('http://pucithd.com/data/hirings.json', function(data) {
  hirings=data.hirings;
  setInterval(countDown, 1000);
});

function countDown() {
  var str;
  
  for (var i = 0; i < hirings.length; i++) {
    var now = new Date().getTime();
    var countDownDate = new Date(hirings[i].last_date).getTime();

    var distance = countDownDate - now;

    if(distance > 0 ){
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      var days = 0;
      var hours = 0;
      var minutes = 0;
      var seconds = 0;
    }

    str += "<tr><th>"+(i+1)+"</th><td>"+hirings[i].name+"</td><td>"+hirings[i].by+"</td><td>"+hirings[i].campus+"</td><td>"+days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "+"</td><td><a href='"+hirings[i].fb_event+"'>Event Page</a></td><td><a href='"+hirings[i].link+"'>Apply</a></td></tr>";
  }
  $("#hirings").html(JSON.stringify(str));
}
