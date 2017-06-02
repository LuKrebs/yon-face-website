$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$("#first").hide();
	$("#second").hide();

	$("#sfirst").hide();
	$("#ssecond").hide();

	$("#camera").hide();

	// make the text appear and disappear 
	setTimeout(function() {
	  $("#first").fadeIn(1500);
	}, 1500);

	setTimeout(function() {
	  $("#second").fadeIn(2000);
	}, 3500);

	setTimeout(function() {
	  $("#sfirst").fadeIn(1000);
	}, 7000);

	setTimeout(function() {
	  $("#ssecond").fadeIn(1000);
	}, 10000);

	setTimeout(function() {
	  $("#camera").fadeIn(1500);
	}, 1500);

	/* $("#testFont").each(function() {
		var e = $(this);
		setInterval(function() {
			if (e.css('visibility') == 'hidden') {
				e.css('visibility', 'visible');
			}
			else {
				e.css('visibility', 'hidden');	
			}
		}, 1000);
	});
	*/ 
});