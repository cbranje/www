// JavaScript Document



$(document).ready(function(){
		$("#home").hide();
		$("#contact").hide();
		$("#pets").hide();

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
        $("#home").fadeIn(1000);
    })
	
	 $("#nav2").click(function(){
        $("#home").hide();
    })
	
	$("#nav3").click(function(){
        $("#contact").hide();
		$("#welcome").hide();
		$("#home").hide();
        $("#pets").fadeIn(1000);
    })
	
	 $("#nav4").click(function(){
        $("#home").hide();
		$("#welcome").hide();
		$("#pets").hide();
		$("#contact").fadeIn(1000);

    })
    

});