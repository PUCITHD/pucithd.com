$.getJSON('http://pucithd.com/data/hirings.json', function(data) {
  var hirings=data.hirings;
  var str;
  for (var i = 0; i < hirings.length; i++) {
    str += "<tr><th>"+(i+1)+"</th><td>"+hirings[i].name+"</td><td>"+hirings[i].by+"</td><td>"+hirings[i].campus+"</td><td>"+hirings[i].last_date+"</td><td><a href='"+hirings[i].fb_event+"'>Event Page</a></td><td><a href='"+hirings[i].link+"'>Apply</a></td></tr>";
  }
  $("#hirings").html(JSON.stringify(str));
});
