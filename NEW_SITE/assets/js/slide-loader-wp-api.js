//this script will load post data of pucit help desk wordpress site
//post data: title, author, author avatar, featured image
var postDataObj = [];

function populateCarousel() {
  document.getElementById("carousel-slider"); //link to DOM source
  var injectionCode = "";

  for (let i = 0; i < postDataObj.length; i++) {
    injectionCode +=
      '<div href="#" style="width:18rem; height:13rem;" class="card font-montserrat-bold bg-dark"><img src="' + postDataObj[i].featured_image + '" alt="slide-img" class="card-img"><div class="card-img-overlay"><a class="slide-link" href="' + postDataObj[i].postURL + '"><h4 class="card-title">' + postDataObj[i].post_title + '</h4></a><img src="' + postDataObj[i].author_avatarURL + '"style="display:inline; width: 25px; border-radius: 50%;" alt=""><span class="card-text" style="font-size: 0.7em"> ' + postDataObj[i].author_name + '</span></div></div>';
  }
  injectionCode += '</div>';
  document.getElementById("carousel-slider").innerHTML = injectionCode;


  //owl carousel api calling
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      mouseDrag: true,
      touchDrag: true,
      autoWidth: true,
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
    });
  });
}
async function getDataFromWP() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var result = JSON.parse(this.responseText).posts;
      for (let i = 0; i < result.length; i++) {
        postDataObj.push({
          "post_title": result[i].title,
          "postURL": String("https://blog.pucithd.com/post/" + result[i].URL.slice(result[i].URL.lastIndexOf("/", result[i].URL.length - 2) + 1)),
          "author_name": result[i].author.name,
          "author_avatarURL": result[i].author.avatar_URL,
          "featured_image": result[i].featured_image
        });
      }
      populateCarousel();
    }
  }
  xhttp.open("GET", "https://public-api.wordpress.com/rest/v1.1/sites/pucithelpdesk.wordpress.com/posts");
  xhttp.send();
}
getDataFromWP();


//function to open specific post slide on click