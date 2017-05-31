$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$("#first").hide();
	$("#second").hide();

	$("#first").fadeIn(2000);
	$("#second").fadeIn(2500);
	

});