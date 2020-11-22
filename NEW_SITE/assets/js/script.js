//display shifting ajax functions (calcNo: 0, agg; 1, gpa; 2, cgpa)
const launchAggCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  }
  xhttp.open("GET", "./assets/src_files/agg.html");
  xhttp.send();
}
const launchGpaCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  }
  xhttp.open("GET", "./assets/src_files/gpa.html");
  xhttp.send();
}
var noOfCourses;
const startGPA_calc = () => {
  noOfCourses = Number(document.getElementById("course_count").value);
  if (noOfCourses > 0 && noOfCourses <= 7) {
    document.getElementById("course_count").style.display = "none";
    document.getElementById("back-arrow").style.display = "none";
    document.getElementById("gpa_continue_btn").style.display = "none";
    for (let i = 0; i < noOfCourses; i++) {
      document.getElementById("gpa-calc-form").innerHTML += String('<div class="form-group d-flex flex-row"><input class="form-control" type="number" placeholder="Marks" id="marks' + i + '"><input class="form-control" type="number" placeholder="Credit Hours" id=credit_hour' + i + '></div>');
      //every field assigned id as e.g. course0 and credit_hour0

    }
    document.getElementById("gpa-calc-form").innerHTML += String('<div class="form-group"><button class="btn btn-outline-primary btn-block" type="button" onclick="calculateGPA();" id="gpa_calculate_btn">Calculate</button></div>');
    document.getElementById("gpa-calc-form").innerHTML += String('<div class="form-group" onclick="launchGpaCalc();" id="back-arrow"><button class="btn btn-outline-primary" type="button"><i class="fas fa-arrow-left"></i></button></div>');
    document.getElementById("gpa-calc-form").innerHTML += String('<div class="form-group text-center font-montserrat" style="font-size: 130%;"><strong class="text-center font-montserrat" style="font-size: 150%;" id="calc_result">0.00</strong></div>');
  } else {
    document.getElementById("error_msg").textContent = "Invalid Input! Try Again"
  }
}
const launchCgpaCalc = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
  }
  xhttp.open("GET", "./assets/src_files/cgpa.html");
  xhttp.send();
}
const launchHome = () => {
  window.open("./index.html", "_self");
}
const launchBlog = () => {
  window.open("http://blog.pucithd.com", "_self")
}
const launchPucitX = () => {
  window.open("http://pucitx.pucithd.com", "_self")
}
const launchPucitDev = () => {
  window.open("https://pucit.dev/", "_self")
}



//calculators functionalities
const calculateAgg = () => {
  var input = {
    t_matric: Number(document.querySelector("#total_matric_marks").value) / 4,
    o_matric: Number(document.querySelector("#obtained_matric_marks").value) / 4,
    t_inter: Number(document.querySelector("#total_inter_marks").value),
    o_inter: Number(document.querySelector("#obtained_inter_marks").value),
    last_degree_year: Number(document.querySelector("#last_degree_year").value),
    hafiz_flag: document.querySelector("#hafiz-e-quran").checked
  };
  document.querySelector("#calc_result").textContent =
    Number(100 * ((input.o_matric / 4 + input.o_inter + (input.hafiz_flag ? 20 : 0)) /
      (input.t_matric / 4 + input.t_inter))).toPrecision(7);
}
const getGrade = (marks) => {
  if(marks >= 85) return 4.00;
  if(marks >= 80) return 3.70;
  if(marks >= 75) return 3.30;
  if(marks >= 70) return 3.00;
  if(marks >= 65) return 2.70;
  if(marks >= 61) return 2.30;
  if(marks >= 58) return 2.00;
  if(marks >= 55) return 1.70;
  if(marks >= 50) return 1.00;
  else return 0.00;
}
const calculateGPA = () => {
  //validation pending
  var sum = 0,
    ch = 0;
  for (let i = 0; i < noOfCourses; i++) {
    sum +=
      getGrade(Number(document.getElementById(String("marks" + i)).value)) *
      Number(document.getElementById(String("credit_hour" + i)).value);
    ch += Number(document.getElementById(String("credit_hour" + i)).value);
  }
  console.log(sum / ch);
  document.getElementById("calc_result").textContent = Number(sum / ch).toPrecision(3);
}