//var jobs = {};

$.getJSON('.../../data/jobs.json', function(data) {
  //console.log(data);
  innerHTMLText="<div class=\"columns\">";
  var q = new Date();
  var m = q.getMonth();
  var d = q.getDate();
  var y = q.getFullYear();
  var date = new Date(y,m,d);

  var tempjobs=data.jobs;
  var jobs =[];
  for (var i = 0; i < tempjobs.length; i++) {
    mydate=new Date(tempjobs[i].apply_before);
    if (mydate >= date)
      jobs.push(tempjobs[i]);
  }
  jobs.reverse();
  for (var i = 0; i < jobs.length; i++) {
    if (i%3==0) {
      innerHTMLText += "</div><div class=\"columns\">"
    }
    innerHTMLText += "<div class=\"column\"><div class=\"card\"><header class=\"card-header\"><p class=\"card-header-title\">" + jobs[i].title + " - " + jobs[i].type + "</p></header><div class=\"card-content\"><div class=\"content\">" + jobs[i].description + "<hr><b>Positions: </b>" + jobs[i].positions + "<br><b>Skills: </b> " + jobs[i].skills.join(', ') + "<br><b>Experience: </b>" + jobs[i].experience + "<br><b>Apply Before: </b> <time>" + jobs[i].apply_before + "</time></div></div><footer class=\"card-footer\"><a href=\"" + jobs[i].company.url + "\" target=\"_blank\" class=\"card-footer-item\">" + jobs[i].company.name + "</a><span class=\"card-footer-item\">" + jobs[i].location + "</span><a href=\"" + jobs[i].apply_link + "\" target=\"_blank\" class=\"card-footer-item\">Apply</a></footer></div></div>";
    //console.log(jobs[i].title);
  }
  innerHTMLText += "</div>";
  $(".jobs").html(innerHTMLText);
  //setInterval(countDown, 1000);
});
