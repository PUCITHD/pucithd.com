



$(".get-ag").click(function(){

  	var totalMatric=$(".t-matric").val();
  	var matric=$(".matric").val();
    var inter=$(".inter").val();
    var totalInter = $(".t-inter").val();
  	//var puTest=$(".pu").val();
  	var Hifz=$(".hifz").find(":selected").text();
    if((totalMatric!="" || totalMatric!=" ") && (matric!="" || matric!=" ") && (inter!="" || inter!=" ")&& (totalInter!="" || totalInter!=" ")){
  	if(Hifz=="No Hifz-e-Quran"){
  		var interFull=totalInter; //1179/1375=60.02
  		var marksEarned=+1/4*matric+ +inter;
  		var TotalMarks=+1/4*totalMatric+ +interFull;
  		var agregate1=100*(marksEarned/TotalMarks);

      var year=$("#year").val();
        $(".form1").slideUp("slow");
        $(".agregate-msg").slideDown("slow");
            $(".msg-display").html("Your Morning Aggregate for PUCIT is:");
            $(".msg").html("<b>"+(agregate1-2*(2020-parseInt(year))).toFixed(4)+"</b>");
            $(".msgX-display").html("Your Afternoon Aggregate for PUCIT is:");
            $(".msgX").html("<b>"+(agregate1).toFixed(4)+"</b>");
        $(".goodluck").html("<div class='fb-share-button' data-href='http://pucithd.com/aggregate-calculator.html' data-layout='button_count' data-size='large' data-mobile-iframe='true'><a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fpucithd.com%2Faggregate-calculator.html&amp;src=sdkpreparse' class='fb-xfbml-parse-ignore'>Share</a></div>");
        $(".back").html("<button class='button is-primary back-btn'>Return Back</button>");
  	}else{
  		
      var interFull=totalInter; //1179/1375=61.04
      var hifz_marks=20;
      var marksEarned=+1/4*matric+ +inter +20;
      var TotalMarks=+1/4*totalMatric+ +interFull;
      var agregate2=100*(marksEarned/TotalMarks);

        var year=$("#year").val();
      $(".form1").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
        $(".msg-display").html("Your Morning Aggregate for PUCIT is:");
        $(".msg").html("<b>"+(agregate2-2*(2020-parseInt(year))).toFixed(4)+"</b>");
        $(".msgX-display").html("Your Afternoon Aggregate for PUCIT is:");
        $(".msgX").html("<b>"+(agregate2).toFixed(4)+"</b>");
      $(".goodluck").html("<b>Best of Luck :)</b>");
      $(".back").html("<button class='button is-primary back-btn'>Return Back</button>");
  	}
  	}else{
      alert("All Fields Are Required!");
    }
  });
  $(".get-ag2").click(function(){
    var mstotalMatric=$(".ms-t-matric").val();
    var msmatric=$(".ms-matric").val();
    var msinter=$(".ms-inter").val();
    var msbsc_total=$(".bsc-total-marks").val();
    var msbsc_obt=$(".bsc-obt-marks").val();
    var msHifz=$(".ms-hifz").find(":selected").text();
    var year=$("#year2").val();
    if((mstotalMatric!="" || mstotalMatric!=" ") && (msmatric!="" || msmatric!=" ") && (msinter!="" || msinter!=" ")  && (msbsc_total!="" || msbsc_total!=" ") && (msbsc_obt!="" || msbsc_obt!=" ")){
    if(msHifz=="No Hifz-e-Quran"){
      var interFull=1100; //1179/1375=60.02
      var marksEarned=+1/4*msmatric+ +1/5*msinter + +msbsc_obt;
      var TotalMarks=+1/4*mstotalMatric+ +1/5*interFull + +msbsc_total;
      var aggregate=100*(marksEarned/TotalMarks);


      $(".form2").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Morning Aggregate for PUCIT is:");
      $(".msg").html("<b>"+(aggregate-2*(2020-parseInt(year))).toFixed(4)+"</b>");
        $(".msgX-display").html("Your Afternoon Aggregate for PUCIT is:");
        $(".msgX").html("<b>"+aggregate.toFixed(4)+"</b>");
      $(".goodluck").html("<b>Best of Luck :)</b>");
      $(".back").css("display","none");
      $(".back2").html("<button class='button is-primary back-btn'>Return Back</button>");
    }else{
      
      var interFull=1100; //1179/1375=61.04
      var marksEarned=+1/4*msmatric+ +1/5*msinter + +msbsc_obt + 20;
      var TotalMarks=+1/4*mstotalMatric+ +1/5*interFull + +msbsc_total;
      var aggregate=100*(marksEarned/TotalMarks);


      var year=$("#year2").val();
      $(".form2").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Morning Aggregate for PUCIT is:");
      $(".msg").html("<b>"+(aggregate-2*(2019-parseInt(year))).toFixed(4)+"</b>");
        $(".msgX-display").html("Your Afternoon Aggregate for PUCIT is:");
        $(".msgX").html("<b>"+aggregate.toFixed(4)+"</b>");
      $(".goodluck").html("<b>Best of Luck :)</b>");
      $(".back").css("display","none");
      $(".back2").html("<button class='button is-primary back-btn'>Return Back</button>");
    }
    }else{
      alert("All Fields Are Required!");
    }
  });
 $(".back").click(function(){
   $(".agregate-msg").slideUp("slow");
   $(".form1").slideDown("slow");
 });

 $(".back2").click(function(){
   $(".agregate-msg").slideUp("slow");
   $(".form2").slideDown("slow");
 });
   $(".goto-main").click(function(){
    $(".form1").slideUp("slow");
    $(".main-form").slideDown("slow");
   });
   $(".goto-main2").click(function(){
    $(".form2").slideUp("slow");
    $(".main-form").slideDown("slow");
   });
$(".continue").click(function(){
  var degree=$(".deg").find(":selected").text();
  if(degree=="BS Program"){
    $(".main-form").slideUp("slow");
    $(".form1").slideDown("slow");
  }else{
    $(".main-form").slideUp("slow");
    $(".form2").slideDown("slow");
  }
});


//gpa calculator

var count = $("#con").click(function abc() {
    var invalid;
    count = $("#count").val();
    if(count.length<1)
    {
        alert('Please Enter No of Subjects')
    }
    if (count > 0) {
        $(".mainForm").fadeOut();
        $(".newForm").fadeIn();
        var count = $("#count").val();



        if (count > 0) {
            $('#tblbody').html("");
            for (var i = 0; i < count; i++) {
                var tr = $("<tr>");
                var td1 = $("<td style=\"text-align: center\">");
                var td2 = $("<td style=\"text-align: center\">");
                td1.html("<input type='number' min='0' class='obtainedMarks'>").val;
                td2.html("<input type='number' min='1'  class='creditHours'>").val;


                tr.append(td1);
                tr.append(td2);
                $("#tblbody").append(tr);
            }
        }
    }
});



$(".get-gpa").click(function () {


    var count = $('.creditHours').length;

    var invalid;
    var gpa = 0.00;
    var invalidMarks = false;
    var tsum = 0.00;
    var sum = 0.00
    var tchrs = 0;

    for(var i=0;i<count;i++)
    {
        var marks=document.getElementsByClassName('obtainedMarks')[i];
        var chrs=document.getElementsByClassName('creditHours')[i];
        if((marks.value).length<1 || (chrs.value).length<1)
        {
            invalid=true;
            break;
        }
        if(marks.value >100  || marks.value < 0){
            invalidMarks = true;
            break;
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

    }
    if(invalid==true)
        alert("Please fill all the required fields.");
    if (invalidMarks == true)
        alert("Obtained Marks Must be from 0-100");
    if(!invalid && !invalidMarks)
    {
        gpa = sum / parseFloat(tchrs);
        $(".newForm").slideUp("slow");
        $(".gpa-msg").slideDown("slow");
        $(".msgDisplay").html("<h1>Your GPA is:</h1>");
        $(".msg1").html("<b>"+gpa.toFixed(2)+"</b>");
        $(".goodLuck").html("<b>Best of Luck :)</b>");
        $(".back3").html("<button class='button is-primary back-btn'>Return Back</button>");

    }




});

$(".goBack").click(function () {
    $(".newForm").fadeOut();
    $(".mainForm").fadeIn();
})




$(".back3").click(function(){
    $(".gpa-msg").slideUp("slow");
    $(".newForm").slideDown("slow");
});
