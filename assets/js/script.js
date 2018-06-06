$(".get-ag").click(function(){

  	var totalMatric=$(".t-matric").val();
  	var matric=$(".matric").val();
  	var inter=$(".inter").val();
  	var puTest=$(".pu").val();
  	var Hifz=$(".hifz").find(":selected").text();
    if((totalMatric!="" || totalMatric!=" ") && (matric!="" || matric!=" ") && (inter!="" || inter!=" ") && (puTest!="" && puTest!=" ")){
  	if(Hifz=="No Hifz-e-Quran"){
  		var interFull=1100; //1179/1375=60.02
  		var marksEarned=+1/4*matric+ +inter;
  		var TotalMarks=+1/4*totalMatric+ +interFull;
  		var partA=70*(marksEarned/TotalMarks);

      var puTestTotal=140;
      var partB=30*(puTest/puTestTotal);
      var agregate1=+partA + +partB;
      $(".form1").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Final Aggregate for PUCIT is:");
      $(".msg").html("<b>"+agregate1+"</b>");
      $(".goodluck").html("<b>Best of Luck :)</b>");
      $(".back").html("<button class='button is-primary back-btn'>Return Back</button>");
  	}else{
  		
      var interFull=1100; //1179/1375=61.04
      var hifz_marks=20;
      var marksEarned=+1/4*matric+ +inter +20;
      var TotalMarks=+1/4*totalMatric+ +interFull;
      var parta=70*(marksEarned/TotalMarks);

      var puTestTotal=140;
      var partb=30*(puTest/puTestTotal);
      var agregate2=+parta + +partb;
      $(".form1").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Final Aggregate for PUCIT is:");
      $(".msg").html("<b>"+agregate2+"</b>");
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
    var mspuTestTotal=$(".ms-pu-total").val();
    var mspuTest=$(".ms-pu").val();
    var msHifz=$(".ms-hifz").find(":selected").text();
    if((mstotalMatric!="" || mstotalMatric!=" ") && (msmatric!="" || msmatric!=" ") && (msinter!="" || msinter!=" ") && (mspuTest!="" || mspuTest!=" ") && (msbsc_total!="" || msbsc_total!=" ") && (msbsc_obt!="" || msbsc_obt!=" ")){
    if(msHifz=="No Hifz-e-Quran"){
      var interFull=1100; //1179/1375=60.02
      var marksEarned=+1/4*msmatric+ +1/5*msinter + +msbsc_obt;
      var TotalMarks=+1/4*mstotalMatric+ +1/5*interFull + +msbsc_total;
      var partA=70*(marksEarned/TotalMarks);

      var partB=30*(mspuTest/mspuTestTotal);
      var agregate=+partA + +partB;
      $(".form2").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Final Aggregate for PUCIT is:");
      $(".msg").html("<b>"+agregate+"</b>");
      $(".goodluck").html("<b>Best of Luck :)</b>");
      $(".back").css("display","none");
      $(".back2").html("<button class='button is-primary back-btn'>Return Back</button>");
    }else{
      
      var interFull=1100; //1179/1375=61.04
      var marksEarned=+1/4*msmatric+ +1/5*msinter + +msbsc_obt + 20;
      var TotalMarks=+1/4*mstotalMatric+ +1/5*interFull + +msbsc_total;
      var partA=70*(marksEarned/TotalMarks);

      var partB=30*(mspuTest/mspuTestTotal);
      var agregate=+partA + +partB;
      $(".form2").slideUp("slow");
      $(".agregate-msg").slideDown("slow");
      $(".msg-display").html("Your Final Aggregate for PUCIT is:");
      $(".msg").html("<b>"+agregate+"</b>");
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