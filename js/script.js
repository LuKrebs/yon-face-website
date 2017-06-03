$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

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


	// make the text appear and disappear 
	setTimeout(function() {
	  $("#first").fadeIn(1500);
	}, 1000);

	setTimeout(function() {
	  $("#second").fadeIn(2000);
	}, 2500);

	setTimeout(function() {
	  $("#sfirst").fadeIn(1000);
	}, 7000);

	setTimeout(function() {
	  $("#sfirst").fadeOut(1000);
	}, 10000);

	setTimeout(function() {
	  $("#ssecond").fadeIn(1000);
	}, 10000);

	$("#entenda").on('click', function() {
		$(this).fadeOut(1000);
		setTimeout(function() {
			$("#camera").fadeIn(1000);
			$("#cameraText").fadeIn(1300);
		}, 1000);
		setTimeout(function() {
			$("#wifi").fadeIn(1000);
			$("#wifiText").fadeIn(1300);
		}, 3000);


		setTimeout(function() {
			$("#one").fadeIn(1300);
		}, 4000);
		setTimeout(function() {
			$("#two").fadeIn(1300);
		}, 5000);
		setTimeout(function() {
			$("#three").fadeIn(1300);
		}, 6000);
		setTimeout(function() {
			$("#four").fadeIn(1300);
		}, 7000);


		setTimeout(function() {
			$("#desktop").fadeIn(1000);
			$("#desktopText").fadeIn(1300);
		}, 8200);

		setTimeout(function() {
			$("#exemplos").fadeIn(1300);
		}, 11100);

	});


	$("#exemplos").on('click', function() {
		$("#one").fadeOut(1000);
		$("#four").fadeOut(1000);

		setTimeout(function() {
			$("#three").fadeOut(1100);
			$("#two").fadeOut(1100);
		}, 1300);

		$("#camera").fadeOut(1300);
		$("#desktop").fadeOut(1300);

		setTimeout(function() {
			$("#wifi").fadeOut(1100);
			$("#wifiText").fadeOut(1100);
		}, 1500);

		$(this).fadeOut(1200);

		setTimeout(function() {
			$("#cameraText").fadeOut(1300);
			$("#desktopText").fadeOut(1300);
		}, 1200);

		setTimeout(function() {
			$(".data").fadeIn(1500);
		}, 2000);
		setTimeout(function() {
			$("#finalButton").fadeIn(2000);
		}, 2700);


	});

    var b = '<p id="estabelecimento" class="text-center">\
              <strong>Fluxo de pessoas: <strong id="green"> +21%</strong></strong>\
            </p>\
            <span><strong class="text-center"><span id="legend"></span> Semana atual: 1.326  </strong></span></p>\
            <p> <strong class="text-center"><span id="legendtwo"></span> Semana anterior: 922 </strong></p>\
            <div class="dropdown">\
              <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdown" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeChartSemanaAtual()">Apenas a Semana atual</a>\
                <a style="cursor:pointer;" onclick="changeChartSemanaAnterior()">Apenas a Semana anterior</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div></p>';

      document.getElementById('date').innerHTML = b;

      var c = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual  </strong></strong></strong>\
              </p>\
              <span><strong class="text-center"> Mulheres: 809<strong id="woman"> 61%</strong>   </strong></span></p>\
              <p id="test"><span><strong class="text-center"> Homens: 517<strong id="man"> 39%</strong>   </strong></span></p> \
              <div class="dropdown">\
                <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                <div id="myDropdownTwo" class="dropdown-content">\
                  <a href="pages/estatistica.html">Comparar períodos</a>\
                  <a href="pages/estatistica.html">Comparar gêneros com outros dados</a>\
                </div>\
              </div>';

      document.getElementById('datetwo').innerHTML = c;

      var d = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong>\
              </p>\
              <div class="row">\
                <div class="col-md-6 col-xs-6 text-center">\
                  <div class="row">\
                    <div class="col-md-5 col-xs-6 text-center">\
                      <p>Alegria </p>\
                      <p>Surpresa</p>\
                      <p>Medo</p>\
                    </div>\
                    <div class="col-md-5 col-xs-6 text-center">\
                      <p><span id="emotion">44%</span id="emotion"></p>\
                      <p><span id="emotion">62%</span id="emotion"></p>\
                      <p><span id="emotion">4%</span id="emotion"></p>\
                    </div>\
                  </div>\
                </div>\
                <div class="col-md-6 col-xs-6 text-center">\
                  <div class="row">\
                    <div class="col-md-5 col-xs-6 text-center">\
                      <p>Raiva </p>\
                      <p>Desgosto</p>\
                      <p>Tristeza</p>\
                    </div>\
                    <div class="col-md-5 col-xs-6 text-center">\
                      <p><span id="emotion">15%</span id="emotion"></p>\
                      <p><span id="emotion">9%</span id="emotion"></p>\
                      <p><span id="emotion">13%</span id="emotion"></p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            <div class="dropdown">\
              <i onclick="myFunctionThree()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownThree" class="dropdown-content">\
                <a href="pages/estatistica.html">Comparar períodos</a>\
                <a href="pages/estatistica.html">Comparar Emoções com outros dados</a>\
              </div>\
            </div>';

        document.getElementById('datethree').innerHTML = d;
});