$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	$("body").hide();
	$("body").fadeIn(1900);

	$("#dropdownImage").on('click', function() {
		$(this).css('opacity', "0.5");
		$(".dropdown-menu").toggle();
		$(".dropdown-menu").on('mouseenter', function() {
			$(this).on('mouseleave', function() {
				$(".dropdown-menu").toggle();
				$("#dropdownImage").css('opacity', "1");
			})
		});
	});


	// Hide text page1 and page2
	$("#first").hide();
	$("#second").hide();
	$("#sfirst").hide();
	$("#ssecond").hide();


	// hide itens page3
	$("#camera").hide();
	$("#wifi").hide();
	$("#desktop").hide();
	$("#cameraText").hide();
	$("#wifiText").hide();
	$("#desktopText").hide();
	$("#one").hide();
	$("#two").hide();
	$("#three").hide();
	$("#four").hide();
	$("#exemplos").hide();
	$(".data").hide();
	$("#finalButton").hide();

	$("#testButtonTwo").hide();

	var test = 0;

	$("#testButton").on('click', function() {
		test += 1;
		console.log(test);
		if (test === 3) {
			$(this).animate({left: "+=500px"}, 2000);
			test += 1;
			setTimeout(function() {
				$("#testButtonTwo").fadeIn(1500);
			}, 1500);
		}
		else {
			return false;
		}
	});

	$("#testButtonTwo").on('click', function() {
		$("section").moveTo(4);
	});
	$("#contactar").on('click', function() {
		$("#section").moveTo(4);
	});



	// make the text appear and disappear 
	setTimeout(function() {
	  $("#first").fadeIn(1500);
	}, 1000);

	setTimeout(function() {
	  $("#second").fadeIn(2000);
	}, 2500);

	setTimeout(function() {
		$("#second").css('transition', "0.5s");  
		$("#first").css('transition', "0.5s");  
	  	$("#second").css('color', "white");
  		$("#first").css('color', "white");
	}, 5000);

	$("#entenda").on('click', function() {
		$(this).fadeOut(1000);
		setTimeout(function() {
			$("#camera").fadeIn(1000);
			$("#cameraText").fadeIn(1200);
		}, 1100);
		setTimeout(function() {
			$("#wifi").fadeIn(1000);
			$("#wifiText").fadeIn(1350);
		}, 3500);

		setTimeout(function() {
			$("#one").fadeIn(1300);
		}, 4700);
		setTimeout(function() {
			$("#two").fadeIn(1300);
		}, 6100);
		setTimeout(function() {
			$("#three").fadeIn(1300);
		}, 7300);
		setTimeout(function() {
			$("#four").fadeIn(1300);
		}, 8500);


		setTimeout(function() {
			$("#desktop").fadeIn(1000);
			$("#desktopText").fadeIn(1300);
		}, 10000);

		setTimeout(function() {
			$("#exemplos").fadeIn(1300);
		}, 11700);

	});


	$("#exemplos").on('click', function() {
		$("section").moveTo(3);
	});

	$(".seq-button").on('click', function() {
		$("#sequence").prev();
	});

});