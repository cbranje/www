// JavaScript Document



$(document).ready(function(){
		$("#home").hide();
		$("#contact").hide();
		$("#pets").hide();
		$("#food").hide();

		$("h1").hide();
		$("h1").fadeIn(1000);

		$("#content_border").hide().delay(200).fadeIn(1000);
		$("#nav1").hide().delay(500).fadeIn(1000);
		$("#nav2").hide().delay(600).fadeIn(1000);
		$("#nav3").hide().delay(800).fadeIn(1000);
		$("#nav4").hide().delay(1000).fadeIn(1000);
		
	
	 $("#nav1").click(function(){
		$("#contact").hide();
		$("#welcome").hide();
		$("#pets").hide();
		$("#food").hide();
        $("#home").fadeIn(1000);
    })
	
	 $("#nav2").click(function(){
        $("#contact").hide();
		$("#welcome").hide();
		$("#home").hide();
		$("#pets").hide();
        $("#food").fadeIn(1000);
    })
	
	$("#nav3").click(function(){
        $("#contact").hide();
		$("#welcome").hide();
		$("#home").hide();
		$("#food").hide();
        $("#pets").fadeIn(1000);
		
    })
	
	 $("#nav4").click(function(){
        $("#home").hide();
		$("#welcome").hide();
		$("#pets").hide();
		$("#food").hide();
		$("#contact").fadeIn(1000);

    })
    

});