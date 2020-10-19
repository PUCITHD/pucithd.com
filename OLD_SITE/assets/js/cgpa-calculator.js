$(document).ready(()=>{
var date = new Date();
$("title").text("PUCIT CGPA CALCULATOR " + date.getFullYear()  + " | PUCIT HELP DESK");
$(".h1").text("PUCIT CGPA CALCULATOR " + date.getFullYear());
var countOfSem = 0;
var semester = 0;
var semgpas = [];  
const semesters = ["1st","2nd","3rd","4th","5th","6th","7th","8th"];
function displayAndCalcCGPA(){
    var gpasum = 0.00;
    var semcount = semgpas.length;
    $(".sem-display").text("Final Result");
    for(let i=0;i<semcount;i++){
        $(".cgpa-display").append("<h2 class = 'has-text-centered' style='margin-bottom:5px'>Your "+semesters[i] + " Semester GPA is : "+"<strong>"+semgpas[i]+"</strong>"+"</h3>");
        gpasum += parseFloat(semgpas[i]);
    }
    $(".cgpa-display").append("<br><h2 class = 'title is-4 has-text-centered'>Your CGPA is : " +"<strong>"+(gpasum/semcount).toFixed(2) +"</strong>"+ "</h2>");
}
function semesterGPA(){
    var value = $(".radio > input:checked").val();
    if(value == "etrgpa"){
        var gpa = $(".gpa-input").val();
    if(gpa == "" || gpa < 0 || gpa > 4 || gpa.length > 4 || (gpa.length > 1 && gpa[1]!='.')){
        alert("Please Enter Correct GPA");
        return false;
    }
    else{
        semgpas.push((Number)(gpa).toFixed(2));
        $(".gpa-input").val("");
    }
    }
    else if(value == "calcgpa"){
        var gpa = gpaCalculator($(".numOS").val());
        if(gpa == false)
            return false;
        semgpas.push(gpa);
        $(".rows").html("");
    }
    return true;
}
function gpaCalculator(numOS){
    var invalid;
    var gpa = 0.00;
    var invalidMarks = false;
    var tsum = 0.00;
    var sum = 0.00
    var tchrs = 0;

    for(var i=0;i<numOS;i++)
    {
        var marks=document.getElementsByClassName('marks')[i];
        var chrs=document.getElementsByClassName('crhs')[i];
        if((marks.value).length<1 || (chrs.value).length<1)
        {
            alert("Please fill all the required fields.");
            return false;
        }
        if(marks.value >100  || marks.value < 0){
            alert("Obtained Marks Must be from 0-100");
            return false;
        }
        if (marks.value >= 85 && marks.value <= 100) {
            tsum = 4.0
        } else if (marks.value >= 80 && marks.value < 85) {
            tsum = 3.7;
        } else if (marks.value >= 75 && marks.value < 80) {
            tsum = 3.3;
        } else if (marks.value >= 70 && marks.value < 75) {
            tsum = 3.0;
        } else if (marks.value >= 65 && marks.value < 70) {
            tsum = 2.7;
        } else if (marks.value >= 61 && marks.value < 65) {
            tsum = 2.3;
        } else if (marks.value >= 58 && marks.value < 61) {
            tsum = 2.0;
        } else if (marks.value >= 55 && marks.value < 58) {
            tsum = 1.7;
        } else if (marks.value >= 50 && marks.value < 55) {
            tsum = 1.0;
        } else if (marks.value < 50) {
            tsum = 0.0;
        }
        sum = sum + (tsum * parseInt(chrs.value));
        tchrs = tchrs +parseInt(chrs.value);
        $(".numOS").val("");
    }
    gpa = sum / parseFloat(tchrs);
    return gpa.toFixed(2);
}
$(".sem-btn").click(()=>{
    console.log(semgpas);
    var value = $(".sem-count").val();
    if(value == "")
        alert("Please Fill the Field");
    else if(value < 1 && value > 8)
        alert("Enter Value From 1-8");
    else{
    $(".modal").slideDown("fast");
    countOfSem = value;
    $(".semester").css("display","none");
    $(".sem-display").text(semesters[semester] + " Semester");
    semester++;
    $(".sem-title").css("display","block");
    $(".options").slideDown("fast");
    }
});
$(".opt-btn").click(()=>{
    var value = $(".radio > input:checked").val();
    if(value != undefined){
     $(".options").css("display","none");
    }
    if(countOfSem == semester){
        $(".next-sem").css("display","none");
        $(".calc-gpa-btn").css("display","block");
    }
    else
        $(".next-sem").css("display","block");
    if(value == "etrgpa"){
        $(".enter-gpa").slideDown("fast");
    }
    else if(value == "calcgpa")
        $(".calc-gpa").slideDown("fast");
});
$(".numOS-btn").click(()=>{
    var numOS = $(".numOS").val();
    console.log(numOS);
    if(numOS != ""){
    $(".calc-gpa").css("display","none");
    for(var i = 0;i<numOS;i++){
    $(".table").append("<tr class=rows><th>"+ Number(i + 1) +"</th><td><input type='number' class='input marks'></td><td><input type='number' class='input crhs'></td></tr>");
    }
    $(".markstable").slideDown("fast");
    }
});
$(".gpa-inp-btn").click(()=>{
    var gpa = $(".gpa-input").val();
    if(gpa < 0 || gpa > 4 || gpa.length > 4 || (gpa.length > 1 && gpa[1]!='.'))
        alert("Please Enter Correct GPA");
});
$(".calc-gpa-btn").click(()=>{
    if(semesterGPA()){
    $(".markstable").hide();
    $(".enter-gpa").hide();
    displayAndCalcCGPA();
    $(".return").css("display","block");
    $(".cgpa-display").slideDown("fast");
    }
});
$(".next-sem").click(()=>{
    if(semesterGPA()){
    $(".enter-gpa").css("display","none");
    $(".markstable").css("display","none");
    $(".sem-display").text(semesters[semester] + " Semester");
    semester++;
    $(".options").slideDown("fast");
    }
});
$(".ok,.delete").click(()=> $(".modal").css("display","none"));
$(".return").click(()=>{
    countOfSem = 0;
    semester = 0;
    semgpas = []; 
    $(".calc-gpa-btn").css("display","none");
    $(".sem-title").css("display","none");
    $(".sem-count").val("");
    $(".return").css("display","none");
    $(".cgpa-display").html("");
    $(".sem-count").val("");
    $(".cgpa-display").css("display","none");
    $(".semester").slideDown("fast");
});
});
