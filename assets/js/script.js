var postDataObj = [];
function populateCarousel() {
  document.getElementById("carousel-slider");
  var injectionCode = "";
  for (let i = 0; i < postDataObj.length; i++) {
    injectionCode +=
      '<div href="#" style="width:18rem; height:13rem;" class="card font-montserrat-bold bg-dark"><img src="' +
      postDataObj[i].featured_image +
      '" alt="slide-img" class="card-img"><div class="card-img-overlay"><a class="slide-link" href="' +
      postDataObj[i].postURL +
      '"><h4 class="card-title">' +
      postDataObj[i].post_title +
      '</h4></a><img src="' +
      postDataObj[i].author_avatarURL +
      '"style="display:inline; width: 25px; border-radius: 50%;" alt=""><span class="card-text" style="font-size: 0.7em"> ' +
      postDataObj[i].author_name +
      "</span></div></div>";
  }
  injectionCode += "</div>";
  document.getElementById("carousel-slider").innerHTML = injectionCode;
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 20,
      mouseDrag: !0,
      touchDrag: !0,
      autoWidth: !0,
      loop: !0,
      autoplay: !0,
      autoplayHoverPause: !0,
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
          post_title: result[i].title,
          postURL: String(
            "https://blog.pucithd.com/post/" +
              result[i].URL.slice(
                result[i].URL.lastIndexOf("/", result[i].URL.length - 2) + 1
              )
          ),
          author_name: result[i].author.name,
          author_avatarURL: result[i].author.avatar_URL,
          featured_image: result[i].featured_image,
        });
      }
      populateCarousel();
    }
  };
  xhttp.open(
    "GET",
    "https://public-api.wordpress.com/rest/v1.1/sites/pucithelpdesk.wordpress.com/posts"
  );
  xhttp.send();
}
const launchAggCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./assets/src_files/agg.html");
  xhttp.send();
};
const launchGpaCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./assets/src_files/gpa.html");
  xhttp.send();
};
var noOfCourses, noOfSemesters;
const startGPA_calc = () => {
  noOfCourses = Number(document.getElementById("course_count").value);
  if (noOfCourses > 0 && noOfCourses <= 7) {
    document.getElementById("course_count").style.display = "none";
    document.getElementById("back-arrow").style.display = "none";
    document.getElementById("gpa_continue_btn").style.display = "none";
    for (let i = 0; i < noOfCourses; i++) {
      document.getElementById("gpa-calc-form").innerHTML += String(
        '<div class="form-group d-flex flex-row"><input class="form-control" type="number" placeholder="Marks" id="marks' +
          i +
          '"><input class="form-control" type="number" placeholder="Credit Hours" id=credit_hour' +
          i +
          "></div>"
      );
    }
    document.getElementById("gpa-calc-form").innerHTML += String(
      '<div class="form-group"><button class="btn btn-outline-primary btn-block" type="button" onclick="calculateGPA();" id="gpa_calculate_btn">Calculate</button></div>'
    );
    document.getElementById("gpa-calc-form").innerHTML += String(
      '<div class="form-group" onclick="launchGpaCalc();" id="back-arrow"><button class="btn btn-outline-primary" type="button"><i class="fas fa-arrow-left"></i></button></div>'
    );
    document.getElementById("gpa-calc-form").innerHTML += String(
      '<div class="form-group text-center font-montserrat" style="font-size: 130%;"><strong class="text-center font-montserrat" style="font-size: 150%;" id="calc_result">0.00</strong></div>'
    );
  } else {
    document.getElementById("error_msg").textContent =
      "Invalid Input! Try Again";
  }
};

const startCGPA_calc = () => {
  noOfSemesters = Number(document.getElementById("semester_count").value);
  if (noOfSemesters > 0 && noOfSemesters <= 7) {
    document.getElementById("semester_count").style.display = "none";
    document.getElementById("back-arrow").style.display = "none";
    document.getElementById("cgpa_continue_btn").style.display = "none";
    for (let i = 0; i < noOfSemesters; i++) {
      document.getElementById("cgpa-calc-form").innerHTML += String(
        '<div class="form-group d-flex flex-row"><input class="form-control" type="number" placeholder="Semester ' +
          (i + 1) +
          '" id="semester' +
          i +
          '"</div>'
      );
    }
    document.getElementById("cgpa-calc-form").innerHTML += String(
      '<div class="form-group"><button class="btn btn-outline-primary btn-block" type="button" onclick="calculateCGPA();" id="cgpa_calculate_btn">Calculate</button></div>'
    );
    document.getElementById("cgpa-calc-form").innerHTML += String(
      '<div class="form-group" onclick="launchCgpaCalc();" id="back-arrow"><button class="btn btn-outline-primary" type="button"><i class="fas fa-arrow-left"></i></button></div>'
    );
    document.getElementById("cgpa-calc-form").innerHTML += String(
      '<div class="form-group text-center font-montserrat" style="font-size: 130%;"><strong class="text-center font-montserrat" style="font-size: 150%;" id="calc_result">0.00</strong></div>'
    );
  } else {
    document.getElementById("error_msg").textContent =
      "Invalid Input! Try Again";
  }
};

const launchCgpaCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "./assets/src_files/cgpa.html");
  xhttp.send();
};
const launchHome = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
      getDataFromWP();
    }
  };
  xhttp.open("GET", "./assets/src_files/homepage.html");
  xhttp.send();
};
const launchBlog = () => {
  window.open("http://blog.pucithd.com", "_self");
};
const launchPucitX = () => {
  window.open("http://pucitx.pucithd.com", "_self");
};
const launchPucitDev = () => {
  window.open("https://pucit.dev/", "_self");
};
const calculateAgg = () => {
  var input = {
    t_matric: Number(document.querySelector("#total_matric_marks").value) / 4,
    o_matric:
      Number(document.querySelector("#obtained_matric_marks").value) / 4,
    t_inter: Number(document.querySelector("#total_inter_marks").value),
    o_inter: Number(document.querySelector("#obtained_inter_marks").value),
    last_degree_year: Number(document.querySelector("#last_degree_year").value),
    hafiz_flag: document.querySelector("#hafiz-e-quran").checked,
  };
  document.querySelector("#calc_result").textContent = Number(
    100 *
      ((input.o_matric / 4 + input.o_inter + (input.hafiz_flag ? 20 : 0)) /
        (input.t_matric / 4 + input.t_inter))
  ).toPrecision(7);
};
const getGrade = (marks) => {
  if (marks >= 85) return 4.0;
  if (marks >= 80) return 3.7;
  if (marks >= 75) return 3.3;
  if (marks >= 70) return 3.0;
  if (marks >= 65) return 2.7;
  if (marks >= 61) return 2.3;
  if (marks >= 58) return 2.0;
  if (marks >= 55) return 1.7;
  if (marks >= 50) return 1.0;
  else return 0.0;
};
const calculateGPA = () => {
  var sum = 0,
    ch = 0;
  for (let i = 0; i < noOfCourses; i++) {
    sum +=
      getGrade(Number(document.getElementById(String("marks" + i)).value)) *
      Number(document.getElementById(String("credit_hour" + i)).value);
    ch += Number(document.getElementById(String("credit_hour" + i)).value);
  }
  document.getElementById("calc_result").textContent = Number(
    sum / ch
  ).toPrecision(3);
};

const calculateCGPA = () => {
  var sum = 0;
  for (let i = 0; i < noOfSemesters; i++) {
    sum += Number(document.getElementById(String("semester" + i)).value);
  }
  document.getElementById("calc_result").textContent = Number(
    sum / noOfSemesters
  ).toPrecision(3);
};
