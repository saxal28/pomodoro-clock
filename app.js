var minuteInput = $("#minuteInput").text();
var secondInput = $("#secondInput").text();

//START BUTTON
//STARTS COUNTDOWN
$("#start").on("click", function() {
  var breaks =  parseInt($("#breakInput").val());
  var breakCount = breaks + 1;
  console.log(breaks);
  
 
  
  setInterval(function(){ 
   
   var sec = parseInt($("#seconds").text());
   var min = parseInt($("#minutes").text());
    $("#details").html(":");
    
    if(sec === 0 && min > 0 && breakCount === (breaks+1) ) {
      $("#seconds").text(0);
      $("#minutes").text(min-1);
      $("#seconds").text(59);
    } else if(sec === 0 && min === 0 && breakCount === (breaks+1)) {
       $("#seconds").text(59);
       $("#minutes").text(breaks);
       $(".circle").css("border-color", "orange");
       $(".circle").css("color", "white");
       breakCount -- ;
       console.log(breakCount);
    } else if (sec === 0 && min > 0 && breakCount > 0 && breakCount < (breaks+1)) {
      $("#seconds").text(0);
      $("#minutes").text(min-1);
      $("#seconds").text(59);
      breakCount--;
      console.log(breakCount);
      }  else if (sec === 0 && min === 0 && breakCount === 0) {
        $("#seconds").text("0"+0);
        $("#minutes").text("0"+0);
        $(".circle").css("border-color", "red");
        $(".circle").css("color", "red");
      }
    
    else {
        sec = parseInt($("#seconds").text());
        if(sec <= 10) {
          console.log("hi");
          $("#details").html(":"+"0");
        }
        
       $("#seconds").text(sec-1);
  
      }
        
//RESET
    $("#reset").on("click", function() {
      
      var sec = parseInt($("#seconds").text());
        if(sec <= 10) {
          console.log("hi");
          $("#details").html(":"+"0");
        }
      var minuteInput = $("#minuteInput").val();
      $("#minutes").text(minuteInput);

      $("#seconds").text(00);
      $(".circle").css("border-color", "green");
      $("#minutes").css("color", "white");
      $("#seconds").css("color", "white");
      $("span").css("color", "white");
      $("p").css("color", "white");
  })  
  
}, 1000);
})

//INCREASE BUTTONS
//increase work minutes
$("#increaseWork").on("click", function() {
  var increase = parseInt($("#minutes").text());
  $("#minutes").text(increase += 1);
  // $("#minuteInput").val(increase);
  var increaseInput =  parseInt($("#minuteInput").val());
  $("#minuteInput").val(increase ++);
});
//increase break minutes
$("#increaseBreak").on("click", function() {
  var increase = parseInt($("#breakInput").val());
  $("#breakInput").val(increase += 1);
  
});


//DECREASE BUTTONS
//decrease work minutes
$("#decreaseWork").on("click", function() {
  var decrease = parseInt($("#minutes").text());
  $("#minutes").text(decrease -= 1);
  var decreaseInput =  parseInt($("#minuteInput").val());
  $("#minuteInput").val(decrease --);
});

//decrease break minutes
$("#decreaseBreak").on("click", function() {
  var decrease = parseInt($("#breakInput").val());
  $("#breakInput").val(decrease -= 1);
});





