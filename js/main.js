$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: false
	});

	var x = screen.width;

	$("body").hide();
	$("body").fadeIn(1900);


	// Dropdown menu
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

	// Hide text page1 
	$("#first").hide();
	$("#second").hide();

	// make the text appear  
	setTimeout(function() {
	  $("#first").fadeIn(1500);
	}, 1000);

	setTimeout(function() {
	  $("#second").fadeIn(2000);
	}, 2500);

	// Change the color of the text after 5s
	setTimeout(function() {
		$("#second").css('transition', "0.5s");  
		$("#first").css('transition', "0.5s");  
			$("#second").css('color', "white");
			$("#first").css('color', "white");
	}, 5000);

	// hide itens page2
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

	//page2 button trigger event
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


		if (x > 600) {
			setTimeout(function() {
				$("#exemplos").fadeIn(1300);
			}, 11700);
		}

	});

	if(x < 600) {
		$(".responsiveDesignTest").removeClass('col-md-4');
		$(".responsiveDesignTest").removeClass('col-sm-4');
		$(".responsiveDesignTest").removeClass('col-xs-4');
		$(".responsiveDesignTest").addClass('col-xs-12');
		$("#desktopText").addClass("marginClass");
	}
	
	$("#exemplos").on('click', function() {
		$("section").moveTo(3);
	});

	$("#contactar").on('click', function() {
		$("#section").moveTo(4);
	});

	//page 3

	//hidding graphs, buttons and texts page 3
	$("#myCanvasChartTwo").hide();
	$("#myCanvasChartThree").hide();
	$(".secondText").hide();
	$(".thirdText").hide();
	$(".testButtonTwo").hide();

	//triggers and functions to make graphs disappear/appear
	$("#firstRightArrow").on('click', function() {
		$("#myCanvasChart").fadeOut(1000);
		$(".firstText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChartTwo").fadeIn(1000);
			$(".secondText").fadeIn();
		}, 1000);
	});

	$("#firstLeftArrow").on("click", function() {
		$("#myCanvasChart").fadeOut(1000);
		$(".firstText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChartThree").fadeIn(1000);
			$(".thirdText").fadeIn(1000);
		}, 1300);
	});

	$("#secondLeftArrow").on("click", function() {
		$("#myCanvasChartTwo").fadeOut(1000);
		$(".secondText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChart").fadeIn(1000);
			$(".firstText").fadeIn(1000);
		}, 1300);
	});

	$("#secondRightArrow").on("click", function() {
		$("#myCanvasChartTwo").fadeOut(1000);
		$(".secondText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChartThree").fadeIn(1000);
			$(".thirdText").fadeIn(1000);
		}, 1000);
	});

	$("#thirdLeftArrow").on("click", function() {
		$("#myCanvasChartThree").fadeOut(1000);
		$(".thirdText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChartTwo").fadeIn(1000);
			$(".secondText").fadeIn(1000);
		}, 1300);
	});

	$("#thirdRightArrow").on("click", function() {
		$("#myCanvasChartThree").fadeOut(1000);
		$(".thirdText").fadeOut(1000);
		setTimeout(function() {
			$("#myCanvasChart").fadeIn(1000);
			$(".firstText").fadeIn(1000);
		}, 1000);
	});

	var test = 0;
	$(".count").on('click', function() {
		test += 1;
		var screenWidth = screen.width;
		if (test >= 3) {
			if (screenWidth > 600) {
				setTimeout(function() {
					$(".testButtonTwo").fadeIn(2000);
				}, 1000);
			}
			else {
				$(".testButtonTwo").hide();
			}
		}
		else {
			return false;
		}
	});

	$(".testButtonTwo").on('click', function() {
		$("section").moveTo(4);
	});

});