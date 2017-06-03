
function changeChart() {
  var a = "img/chart2.png";
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
  
  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
  document.getElementById('buttonactivedone').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedone').style.color = "white";
  document.getElementById('buttonactivedone').style.border = "2px solid white";
  
  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedtwo').style.background = "white";
  document.getElementById('buttonactivedtwo').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwo').style.border = "2px solid white";
  
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedthree').style.background = "white";
  document.getElementById('buttonactivedthree').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedthree').style.border = "2px solid white";
}

function changeChartSemanaAtual() {
  var a = "img/chart3testsemanaatual.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <p><span><strong class="text-center"><span id="legend"></span> Semana Atual: 1.326  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="changeChartSemanaAnterior()">Apenas Semana anterior</a>\
              <a style="cursor:pointer;" onclick="changeChart()">Semana atual e anterior</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function changeChartSemanaAnterior() {
  var a = "img/chart3testsemanaanterior.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <p><span><strong class="text-center"><span id="legendtwo"></span> Semana Anterior: 922  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="changeChartSemanaAtual()">Apenas Semana atual</a>\
              <a style="cursor:pointer;" onclick="changeChart()">Semana atual e anterior</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function changeChartTwo() {
  var a = "img/chart1correto.png";
  var b = '<p id="estabelecimento" class="text-center">\
            <strong>Fluxo de pessoas: <strong id="green"> +18%</strong></strong>\
          </p>\
          <span><strong class="text-center"><span id="legend"></span> Hoje: 256  </strong></span></p>\
          <p> <strong class="text-center"><span id="legendtwo"></span> Ontem: 188 </strong></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartAtualHoje()">Apenas hoje</a>\
              <a style="cursor:pointer;" onclick="chartAtualOntem()">Apenas ontem</a>\
             <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';
  
  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
  document.getElementById('buttonactivedtwo').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwo').style.color = "white";
  document.getElementById('buttonactivedtwo').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedone').style.background = "white";
  document.getElementById('buttonactivedone').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedone').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedthree').style.background = "white";
  document.getElementById('buttonactivedthree').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedthree').style.border = "2px solid white";
}

function chartAtualHoje() {
  var a = "img/chart3testhoje.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <span><strong class="text-center"><span id="legend"></span> Hoje Hoje: 256  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartAtualOntem()">Apenas ontem</a>\
              <a style="cursor:pointer;" onclick="changeChartTwo()">Hoje e ontem</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById("mychart").setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function chartAtualOntem() {
  var a = "img/chart3testontem.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <span><strong class="text-center"><span id="legendtwo"></span> Ontem: 188  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartAtualHoje()">Apenas Hoje</a>\
              <a style="cursor:pointer;" onclick="changeChartTwo()">Hoje e ontem</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById("mychart").setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function changeChartThree() {
  var a = "img/chart3.png";
  var b = '<p id="estabelecimento" class="text-center">\
            <strong>Fluxo de pessoas: <strong id="green"> +13%</strong></strong>\
          </p>\
          <span><strong class="text-center"><span id="legend"></span> Mês atual: 4.328  </strong></span></p>\
          <p> <strong class="text-center"><span id="legendtwo"></span> Mês anterior: 3.652 </strong></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartTreeAtual()">Apenas o mês atual</a>\
              <a style="cursor:pointer;" onclick="chartTreeAnterior()">Apenas o mês anterior</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
  document.getElementById('buttonactivedthree').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedthree').style.color = "white";
  document.getElementById('buttonactivedthree').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedone').style.background = "white";
  document.getElementById('buttonactivedone').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedone').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwo').style.background = "white";
  document.getElementById('buttonactivedtwo').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwo').style.border = "2px solid white";
}

function chartTreeAtual() {
  var a = "img/chart3atual.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <span><strong class="text-center"><span id="legend"></span> Mês atual: 4.328  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartTreeAnterior()">Apenas o mês anterior</a>\
              <a style="cursor:pointer;" onclick="changeChartThree()">Mês atual e anterior</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';
  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function chartTreeAnterior() {
  var a = "img/chart3anterior.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Fluxo de pessoas: </strong>\
          </p>\
          <span><strong class="text-center"><span id="legendtwo"></span> Mês anterior: 3.652  </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdown" class="dropdown-content">\
              <a style="cursor:pointer;" onclick="chartTreeAtual()">Apenas o mês atual</a>\
              <a style="cursor:pointer;" onclick="changeChartThree()">Mês atual e anterior</a>\
              <a href="pages/estatistica.html">Período personalizado</a>\
            </div>\
          </div>';
  document.getElementById('mychart').setAttribute("src", a);
  document.getElementById('date').innerHTML = b;
}

function changeChartPieOne() {
  var a = "img/piechart1.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong></strong>\
          </p>\
          <span><strong class="text-center"> Mulheres: 145<strong id="woman"> 56%</strong>   </strong></span></p>\
          <p id="test"> <span><strong class="text-center"> Homens: 111<strong id="man"> 44%</strong>   </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownTwo" class="dropdown-content">\
                <a href="pages/estatistica.html">Comparar períodos</a>\
                <a href="pages/estatistica.html">Comparar gêneros com outros dados</a>\
              </div>\
            </div>';
  document.getElementById('mypiechart').setAttribute("src", a);
  document.getElementById('datetwo').innerHTML = b;

  document.getElementById('buttonactivedfour').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedfour').style.color = "white";
  document.getElementById('buttonactivedfour').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedfive').style.background = "white";
  document.getElementById('buttonactivedfive').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfive').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedsix').style.background = "white";
  document.getElementById('buttonactivedsix').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedsix').style.border = "2px solid white";
}

function changeChartPieTwo() {
  var a = "img/piechart2.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
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
  document.getElementById('mypiechart').setAttribute("src", a);
  document.getElementById('datetwo').innerHTML = b;

  document.getElementById('buttonactivedfive').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedfive').style.color = "white";
  document.getElementById('buttonactivedfive').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedfour').style.background = "white";
  document.getElementById('buttonactivedfour').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfour').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedsix').style.background = "white";
  document.getElementById('buttonactivedsix').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedsix').style.border = "2px solid white";
}

function changeChartPieThree() {
  var a = "img/piechart3.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong></strong></strong>\
          </p>\
          <span><strong class="text-center"> Mulheres: 2.900<strong id="woman"> 67%</strong>   </strong></span></p>\
          <p id="test"> <span><strong class="text-center"> Homens: 1.428<strong id="man"> 33%</strong>   </strong></span></p>\
          <div class="dropdown">\
            <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownTwo" class="dropdown-content">\
              <a href="pages/estatistica.html">Comparar períodos</a>\
              <a href="pages/estatistica.html">Comparar gêneros com outros dados</a>\
            </div>\
          </div>';
  document.getElementById('mypiechart').setAttribute("src", a);
  document.getElementById('datetwo').innerHTML = b;

  document.getElementById('buttonactivedsix').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedsix').style.color = "white";
  document.getElementById('buttonactivedsix').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedfour').style.background = "white";
  document.getElementById('buttonactivedfour').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfour').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedfive').style.background = "white";
  document.getElementById('buttonactivedfive').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfive').style.border = "2px solid white";
}

function changeChartBarOne() {
  var a = "img/barchart1.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong>\
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
                  <p><span id="emotion">65%</span id="emotion"></p>\
                  <p><span id="emotion">33%</span id="emotion"></p>\
                  <p><span id="emotion">15%</span id="emotion"></p>\
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
                  <p><span id="emotion">10%</span id="emotion"></p>\
                  <p><span id="emotion">18%</span id="emotion"></p>\
                  <p><span id="emotion">25%</span id="emotion"></p>\
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

  document.getElementById('mybarchart').setAttribute("src", a);
  document.getElementById('datethree').innerHTML = b;

  document.getElementById('buttonactivedseven').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedseven').style.color = "white";
  document.getElementById('buttonactivedseven').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedeight').style.background = "white";
  document.getElementById('buttonactivedeight').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeight').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivednine').style.background = "white";
  document.getElementById('buttonactivednine').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivednine').style.border = "2px solid white";
}

function changeChartBarTwo() {
  var a = "img/barchart2.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
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

  document.getElementById('mybarchart').setAttribute("src", a);
  document.getElementById('datethree').innerHTML = b;

  document.getElementById('buttonactivedeight').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedeight').style.color = "white";
  document.getElementById('buttonactivedeight').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedseven').style.background = "white";
  document.getElementById('buttonactivedseven').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedseven').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivednine').style.background = "white";
  document.getElementById('buttonactivednine').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivednine').style.border = "2px solid white";
}

function changeChartBarThree() {
  var a = "img/barchart3.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong> </strong>\
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
                  <p><span id="emotion">71%</span id="emotion"></p>\
                  <p><span id="emotion">19%</span id="emotion"></p>\
                  <p><span id="emotion">3%</span id="emotion"></p>\
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
                  <p><span id="emotion">9%</span id="emotion"></p>\
                  <p><span id="emotion">17%</span id="emotion"></p>\
                  <p><span id="emotion">5%</span id="emotion"></p>\
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

  document.getElementById('mybarchart').setAttribute("src", a);
  document.getElementById('datethree').innerHTML = b;

  document.getElementById('buttonactivednine').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivednine').style.color = "white";
  document.getElementById('buttonactivednine').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedseven').style.background = "white";
  document.getElementById('buttonactivedseven').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedseven').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedeight').style.background = "white";
  document.getElementById('buttonactivedeight').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeight').style.border = "2px solid white";
}

function changeChartAttOne() {
  var a = "img/barchartatratividade1.png";
  var b = '<p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong>: </p>\
          <p style="margin-top:-3px !important;"><span id="pessoas">256 pessoas</span></p>\
          <p><span>197 pessoas atraídas</span><span id="atraidos"> 77%</span></p>\
          <p><span> 59 pessoas indiferentes</span><span id="natraidos"> 23%</span></p>\
          <p>Nível de atratividade: <span id="nivel">Alto</span></p>\
          <div class="dropdown">\
            <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownFour" class="dropdown-content">\
              <a href="estatistica.html"> Comparar atratividade entre produtos</a>\
              <a style="cursor:pointer;" onclick="changeProduct()">Alterar produto em análise</a>\
            </div>\
          </div>';

  document.getElementById('datefour').innerHTML = b;
  document.getElementById('myattchart').setAttribute("src", a);

  document.getElementById('buttonactivedten').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedten').style.color = "white";
  document.getElementById('buttonactivedten').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedeleven').style.background = "white";
  document.getElementById('buttonactivedeleven').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeleven').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwelve').style.background = "white";
  document.getElementById('buttonactivedtwelve').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwelve').style.border = "2px solid white";
}

function changeChartAttTwo() { 
  var a = "img/barchartatratividade2.png";
  var b = '<p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> nessa semana </strong>:</p>\
          <p style="margin-top:-3px !important;"><span id="pessoas"> 1.326 pessoas</span></p>\
          <p><span>835 pessoas atraídas</span><span id="atraidos"> 63%</span></p>\
          <p><span>491 pessoas indiferentes</span><span id="natraidos"> 37%</span></p>\
          <p>Nível de atratividade: <span id="nivel">Alto</span></p>\
          <div class="dropdown">\
            <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownFour" class="dropdown-content">\
              <a href="pages/estatistica.html">Comparar atratividade entre produtos</a>\
              <a style="cursor:pointer;" onclick="changeProduct()">Alterar produto em análise</a>\
            </div>\
          </div>';
  document.getElementById('datefour').innerHTML = b;
  document.getElementById('myattchart').setAttribute("src", a);

  document.getElementById('buttonactivedeleven').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedeleven').style.color = "white";
  document.getElementById('buttonactivedeleven').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedten').style.background = "white";
  document.getElementById('buttonactivedten').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedten').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwelve').style.background = "white";
  document.getElementById('buttonactivedtwelve').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwelve').style.border = "2px solid white";
}

function changeChartAttThree() { 
  var a = "img/barchartatratividade3.png";
  var b = '<p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> nesse mês</strong>:</p>\
          <p style="margin-top:-3px !important;"><span id="pessoas">4.328 pessoas</span></p>\
          <p><span>1.558 pessoas atraídas</span><span id="atraidos"> 39%</span></p>\
          <p><span>2.770 pessoas indiferentes</span><span id="natraidos"> 61%</span></p>\
          <p>Nível de atratividade: <span id="nivel">Baixo</span></p>\
          <div class="dropdown">\
            <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownFour" class="dropdown-content">\
              <a href="pages/estatistica.html">Comparar atratividade entre produtos</a>\
              <a style="cursor:pointer;" onclick="changeProduct()">Alterar produto em análise</a>\
            </div>\
          </div>';
  document.getElementById('datefour').innerHTML = b;
  document.getElementById('myattchart').setAttribute("src", a);

  document.getElementById('buttonactivedtwelve').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwelve').style.color = "white";
  document.getElementById('buttonactivedtwelve').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedten').style.background = "white";
  document.getElementById('buttonactivedten').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedten').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedeleven').style.background = "white";
  document.getElementById('buttonactivedeleven').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeleven').style.border = "2px solid white";
}

function changeProduct() {
  var a = prompt("Qual produto você deseja medir a atratividade?");
  confirm("Produto alterado com sucesso");
  var b = '<div class="row">\
            <div class="col-md-12">\
              <div class="row">\
                <div class="col-md-12 text-center">\
                  <p>Trafegaram em frente ao produto: <span>0 pessoas</span></p>\
                  <p><span>0 pessoas atraídas</span><span id="atraidos"> 0%</span></p>\
                  <p><span>0 pessoas indiferentes</span><span id="natraidos"> 0%</span></p>\
                  <p>Nível de atratividade: <span id="niveltwo">______</span></p>\
                </div>\
              </div>\
            </div>\
          </div>\
          <div class="dropdown">\
            <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownFour" class="dropdown-content">\
              <a href="pages/estatistica.html">Comparar atratividade entre produtos</a>\
              <a style="cursor:pointer;" onclick="changeProduct()">Alterar produto em análise</a>\
            </div>\
          </div>';

  document.getElementById('dudalina').innerHTML = a;
  document.getElementById('datefour').innerHTML = b;
}

function changeChartDemoOne() {
  var a = "img/barchartdemografia1.png"
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
            <div class="row">\
              <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                <p><span id="legendcriancas"></span> Criança <span id="emotion" style="margin-left:7px !important;">3%</span></p>\
                <p><span id="legendjovens"></span> Jovem <span id="emotion" style="margin-left:7px !important;">37%</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 col-xs-6">\
                <p><span id="legendadultos"></span> Adulto <span id="emotion" style="margin-left:7px !important;">51%</span></p>\
                <p><span id="legendidosos"></span> Idoso <span id="emotion" style="margin-left:7px !important;">9%</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownFive" class="dropdown-content">\
                <a href="pages/estatistica.html">Comparar períodos</a>\
                <a href="pages/estatistica.html">Comparar demografia com outros dados</a>\
              </div>\
            </div>';

  document.getElementById('datefive').innerHTML = b;  
  document.getElementById('mydemochart').setAttribute("src", a);

  document.getElementById('buttonactivedthirteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedthirteen').style.color = "white";
  document.getElementById('buttonactivedthirteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedfourteen').style.background = "white";
  document.getElementById('buttonactivedfourteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfourteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedfifteen').style.background = "white";
  document.getElementById('buttonactivedfifteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfifteen').style.border = "2px solid white";      
}

function changeChartDemoTwo() {
  var a = "img/barchartdemografia2.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
            <div class="row">\
              <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                <p><span id="legendcriancas"></span> Criança <span id="emotion" style="margin-left:7px !important;">12%</span></p>\
                <p><span id="legendjovens"></span> Jovem <span id="emotion" style="margin-left:7px !important;">48%</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 col-xs-6">\
                <p><span id="legendadultos"></span> Adulto <span id="emotion" style="margin-left:7px !important;">31%</span></p>\
                <p><span id="legendidosos"></span> Idoso <span id="emotion" style="margin-left:7px !important;">12%</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownFive" class="dropdown-content">\
                <a href="pages/estatistica.html">Comparar períodos</a>\
                <a href="pages/estatistica.html">Comparar demografia com outros dados</a>\
              </div>\
            </div>';

  document.getElementById('datefive').innerHTML = b;
  document.getElementById('mydemochart').setAttribute("src", a);

  document.getElementById('buttonactivedfourteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedfourteen').style.color = "white";
  document.getElementById('buttonactivedfourteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedthirteen').style.background = "white";
  document.getElementById('buttonactivedthirteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedthirteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedfifteen').style.background = "white";
  document.getElementById('buttonactivedfifteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfifteen').style.border = "2px solid white";
}

function changeChartDemoThree() {
  var a = "img/barchartdemografia3.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
            <div class="row">\
              <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                <p><span id="legendcriancas"></span> Criança <span id="emotion" style="margin-left:7px !important;">6%</span></p>\
                <p><span id="legendjovens"></span> Jovem <span id="emotion" style="margin-left:7px !important;">31%</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 col-xs-6">\
                <p><span id="legendadultos"></span> Adulto <span id="emotion" style="margin-left:7px !important;">53%</span></p>\
                <p><span id="legendidosos"></span> Idoso <span id="emotion" style="margin-left:7px !important;">10%</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownFive" class="dropdown-content">\
                <a href="pages/estatistica.html">Comparar períodos</a>\
                <a href="pages/estatistica.html">Comparar demografia com outros dados</a>\
              </div>\
            </div>';
  document.getElementById('datefive').innerHTML = b;
  document.getElementById('mydemochart').setAttribute("src", a);

  document.getElementById('buttonactivedfifteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedfifteen').style.color = "white";
  document.getElementById('buttonactivedfifteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedthirteen').style.background = "white";
  document.getElementById('buttonactivedthirteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedthirteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedfourteen').style.background = "white";
  document.getElementById('buttonactivedfourteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedfourteen').style.border = "2px solid white";
}

function changeGenChartHoje() {
  var a = "img/chartgenerohorariohoje.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </span></p>\
                <p class="text-center">Das 20:00 às 20:59 <span id="emotion">50</span></p>\
                <p class="text-center">Das 21:00 às 21:59 <span id="emotion">61</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 09:00 às 09:59 <span id="emotion">73</span></p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">60</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartHojeMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartHojeHomens()">Apenas Homens</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);

  document.getElementById('buttonactivedsixteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedsixteen').style.color = "white";
  document.getElementById('buttonactivedsixteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedseventeen').style.background = "white";
  document.getElementById('buttonactivedseventeen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedseventeen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedeighteen').style.background = "white";
  document.getElementById('buttonactivedeighteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeighteen').style.border = "2px solid white";
}

function changeGenChartHojeMulheres() {
  var a = "img/chartgenerohorariohojemulheres.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 09:00 às 09:59 <span id="emotion">73</span></p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">60</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartHojeHomens()">Apenas Homens</a>\
                <a style="cursor:pointer;" onclick="changeGenChartHoje()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('mygenhorchart').setAttribute("src", a);
  document.getElementById('datesix').innerHTML = b;
}

function changeGenChartHojeHomens() {
  var a = "img/chartgenerohorariohojehomens.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens</p>\
                <p class="text-center">Das 20:00 às 20:59 <span id="emotion">50</span></p>\
                <p class="text-center">Das 21:00 às 21:59 <span id="emotion">61</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a hstyle="cursor:pointer;" onclick="changeGenChartHojeMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartHoje()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('mygenhorchart').setAttribute("src", a);
  document.getElementById('datesix').innerHTML = b;
}

function changeGenChartSemana() {
  var a = "img/chartgenhorsemana.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                <p class="text-center">Das 19:00 às 19:59 <span id="emotion">273</span></p>\
                <p class="text-center">Das 20:00 às 20:59 <span id="emotion">244</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">378</span></p>\
                <p class="text-center">Das 11:00 às 11:59 <span id="emotion">411</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartSemanaMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartSemanaHomens()">Apenas Homens</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);

  document.getElementById('buttonactivedseventeen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedseventeen').style.color = "white";
  document.getElementById('buttonactivedseventeen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedsixteen').style.background = "white";
  document.getElementById('buttonactivedsixteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedsixteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedeighteen').style.background = "white";
  document.getElementById('buttonactivedeighteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedeighteen').style.border = "2px solid white";
}

function changeGenChartSemanaMulheres() {
  var a = "img/chartgenerohorariosemanamulheres.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">378</span></p>\
                <p class="text-center">Das 11:00 às 11:59 <span id="emotion">411</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartSemanaHomens()">Apenas Homens</a>\
                <a style="cursor:pointer;" onclick="changeGenChartSemana()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);

}

function changeGenChartSemanaHomens() {
  var a = "img/chartgenerohorariosemanahomens.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens</p>\
                <p class="text-center">Das 19:00 às 19:59 <span id="emotion">273</span></p>\
                <p class="text-center">Das 20:00 às 20:59 <span id="emotion">244</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartSemanaMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartSemana()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);

}

function changeGenChartMes() {
  var a = "img/chartgenerohorariomes.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                <p class="text-center">Das 19:00 às 19:59 <span id="emotion">788</span></p>\
                <p class="text-center">Das 20:00 às 20:59 <span id="emotion">536</span></p>\
              </div>\
              <div class="col-md-6 col-sm-6 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031</span></p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartMesMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartMesHomens()">Apenas Homens</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);

  document.getElementById('buttonactivedeighteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedeighteen').style.color = "white";
  document.getElementById('buttonactivedeighteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedsixteen').style.background = "white";
  document.getElementById('buttonactivedsixteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedsixteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedseventeen').style.background = "white";
  document.getElementById('buttonactivedseventeen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedseventeen').style.border = "2px solid white";
}

function changeGenChartMesMulheres() {
  var a = "img/chartgenerohorariomesmulheres.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031</span></p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartMesHomens()">Apenas Homens</a>\
                <a style="cursor:pointer;" onclick="changeGenChartMes()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);
}

function changeGenChartMesHomens() {
  var a = "img/chartgenerohorariomeshomens.png";
  var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
            <div class="row">\
              <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
              <div class="col-md-12 col-sm-12 text-center">\
                <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031</span></p>\
                <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788</span></p>\
              </div>\
            </div>\
            <div class="dropdown">\
              <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
              <div id="myDropdownSix" class="dropdown-content">\
                <a style="cursor:pointer;" onclick="changeGenChartMesMulheres()">Apenas Mulheres</a>\
                <a style="cursor:pointer;" onclick="changeGenChartMes()">Homens e Mulheres</a>\
                <a href="pages/estatistica.html">Período personalizado</a>\
              </div>\
            </div>';

  document.getElementById('datesix').innerHTML = b;
  document.getElementById('mygenhorchart').setAttribute("src", a);
}

function changeAgeChartHoje() {
  var a = "img/chartidadehorariocriancahoje.png";
  var b = "img/chartidadehorarioadultohoje.png";
  var c = "img/chartidadehorariojovemhoje.png";
  var d = "img/chartidadehorarioidosohoje.png";
  var e = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Horários com maior concentração por Idade: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendcriancas"></span> Criança</p>\
              <p class="text-center">Das 09:00 às 09:59 <span id="emotion">17</span></p>\
              <p class="text-center">Das 20:00 às 20:59 <span id="emotion">13</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendjovens"></span> Jovem </p>\
              <p class="text-center">Das 12:00 às 13:00 <span id="emotion">39</span></p>\
              <p class="text-center">Das 21:00 às 21:59 <span id="emotion">27</span></p>\
            </div>\
          </div>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendadultos"></span> Adulto </p>\
              <p class="text-center">Das 12:00 às 13:00 <span id="emotion">41</span></p>\
              <p class="text-center">Das 21:00 às 21:59 <span id="emotion">29</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendidosos"></span> Idoso</p>\
              <p class="text-center">Das 10:00 às 10:59 <span id="emotion">15</span></p>\
              <p class="text-center">Das 19:00 às 17:59 <span id="emotion">13</span></p>\
            </div>\
          </div>\
          <div class="dropdown">\
            <i onclick="myFunctionSeven()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownSeven" class="dropdown-content">\
              <a href="pages/estatistica.html" onclick="changeGenChartMesMulheres()">Comparar idade e horário com outros dados</a>\
              <a href="pages/estatistica.html" onclick="changeGenChartMesHomens()">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById("mydemochartone").setAttribute("src", a);
  document.getElementById("mydemocharttwo").setAttribute("src", b);
  document.getElementById("mydemochartthree").setAttribute("src", c);
  document.getElementById("mydemochartfour").setAttribute("src", d);
  document.getElementById("dateseven").innerHTML = e;

  document.getElementById('buttonactivednineteen').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivednineteen').style.color = "white";
  document.getElementById('buttonactivednineteen').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivedtwenty').style.background = "white";
  document.getElementById('buttonactivedtwenty').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwenty').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwentyone').style.background = "white";
  document.getElementById('buttonactivedtwentyone').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwentyone').style.border = "2px solid white";
}

function changeAgeChartSemana() {
  var a = "img/chartidadehorariocriancasemana.png";
  var b = "img/chartidadehorarioadultosemana.png";
  var c = "img/chartidadehorariojovemsemana.png";
  var d = "img/chartidadehorarioidososemana.png";
  var e = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Horários com maior concentração por Idade: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendcriancas"></span> Criança</p>\
              <p class="text-center">Das 18:00 às 18:59 <span id="emotion">74</span></p>\
              <p class="text-center">Das 12:00 às 12:59 <span id="emotion">67</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendjovens"></span> Jovem </p>\
              <p class="text-center">Das 12:00 às 13:00 <span id="emotion">349</span></p>\
              <p class="text-center">Das 19:00 às 19:59 <span id="emotion">301</span></p>\
            </div>\
          </div>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendadultos"></span> Adulto </p>\
              <p class="text-center">Das 11:00 às 11:59 <span id="emotion">179</span></p>\
              <p class="text-center">Das 14:00 às 14:59 <span id="emotion">257</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendidosos"></span> Idoso</p>\
              <p class="text-center">Das 09:00 às 09:59 <span id="emotion">68</span></p>\
              <p class="text-center">Das 20:00 às 20:59 <span id="emotion">153</span></p>\
            </div>\
          </div>\
          <div class="dropdown">\
            <i onclick="myFunctionSeven()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownSeven" class="dropdown-content">\
              <a href="pages/estatistica.html" onclick="changeGenChartMesMulheres()">Comparar idade e horário com outros dados</a>\
              <a href="pages/estatistica.html" onclick="changeGenChartMesHomens()">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById("mydemochartone").setAttribute("src", a);
  document.getElementById("mydemocharttwo").setAttribute("src", b);
  document.getElementById("mydemochartthree").setAttribute("src", c);
  document.getElementById("mydemochartfour").setAttribute("src", d);
  document.getElementById("dateseven").innerHTML = e;

  document.getElementById('buttonactivedtwenty').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwenty').style.color = "white";
  document.getElementById('buttonactivedtwenty').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivednineteen').style.background = "white";
  document.getElementById('buttonactivednineteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivednineteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwentyone').style.background = "white";
  document.getElementById('buttonactivedtwentyone').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwentyone').style.border = "2px solid white";
}

function changeAgeChartMes() {
  var a = "img/chartidadehorariocriancames.png";
  var b = "img/chartidadehorarioadultomes.png";
  var c = "img/chartidadehorariojovemmes.png";
  var d = "img/chartidadehorarioidosomes.png";
  var e = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Horários com maior concentração por Idade: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong> </strong></p>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendcriancas"></span> Criança</p>\
              <p class="text-center">Das 13:00 às 13:59 <span id="emotion">159</span></p>\
              <p class="text-center">Das 14:00 às 14:59 <span id="emotion">98</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p style="margin-top:-1px !important;"><span id="legendjovens"></span> Jovem </p>\
              <p class="text-center">Das 20:00 às 20:59 <span id="emotion">739</span></p>\
              <p class="text-center">Das 21:00 às 21:59 <span id="emotion">622</span></p>\
            </div>\
          </div>\
          <div class="row">\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendadultos"></span> Adulto </p>\
              <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1164</span></p>\
              <p class="text-center">Das 14:00 às 14:59 <span id="emotion">889</span></p>\
            </div>\
            <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
              <p><span id="legendidosos"></span> Idoso</p>\
              <p class="text-center">Das 17:00 às 17:59 <span id="emotion">232</span></p>\
              <p class="text-center">Das 18:00 às 18:59 <span id="emotion">78</span></p>\
            </div>\
          </div>\
          <div class="dropdown">\
            <i onclick="myFunctionSeven()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
            <div id="myDropdownSeven" class="dropdown-content">\
              <a href="pages/estatistica.html" onclick="changeGenChartMesMulheres()">Comparar idade e horário com outros dados</a>\
              <a href="pages/estatistica.html" onclick="changeGenChartMesHomens()">Período personalizado</a>\
            </div>\
          </div>';

  document.getElementById("mydemochartone").setAttribute("src", a);
  document.getElementById("mydemocharttwo").setAttribute("src", b);
  document.getElementById("mydemochartthree").setAttribute("src", c);
  document.getElementById("mydemochartfour").setAttribute("src", d);
  document.getElementById("dateseven").innerHTML = e;
  
  document.getElementById('buttonactivedtwentyone').style.background = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwentyone').style.color = "white";
  document.getElementById('buttonactivedtwentyone').style.border = "2px solid white";

  /* return the 'dia' button for the normal */
  document.getElementById('buttonactivednineteen').style.background = "white";
  document.getElementById('buttonactivednineteen').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivednineteen').style.border = "2px solid white";
  /*  return the  'mês' for the normal*/
  document.getElementById('buttonactivedtwenty').style.background = "white";
  document.getElementById('buttonactivedtwenty').style.color = "rgb(41,26,76)";
  document.getElementById('buttonactivedtwenty').style.border = "2px solid white";
}

function minimizeFunctionOne() {
  var a = "<strong>Analise o movimento do seu estabelecimento:</strong>";

  document.getElementById('date').innerHTML = a;
}

function minimizeFunctionTwo() {
  var a = "<strong>Analise o gênero do seu público:</strong>";

  document.getElementById('datetwo').innerHTML = a;
}

function minimizeFunctionThree() {
  var a = "<strong>Analise as emoções predominantes:</strong>";

  document.getElementById('datethree').innerHTML = a;
}

function minimizeFunctionFour() {
  var a = "<strong>Descubra o potencial do produto:</strong>";
  document.getElementById('datefour').innerHTML = a;
}
function minimizeFunctionFive() {
  var a = "<strong>Analise as demografias predominantes:</strong>";
  document.getElementById('datefive').innerHTML = a;
}
function minimizeFunctionSix() {
  var a = "<strong>Descubra padrões de gênero em horários específicos:</strong>";
  document.getElementById('datesix').innerHTML = a;
}
function minimizeFunctionSeven() {
  var a = "<strong>Descubra padrões de idade em horários específicos:</strong>";
  document.getElementById('dateseven').innerHTML = a;
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunctionTwo() {
    document.getElementById("myDropdownTwo").classList.toggle("show");
}
function myFunctionThree() {
    document.getElementById("myDropdownThree").classList.toggle("show");
}

function myFunctionFour() {
    document.getElementById("myDropdownFour").classList.toggle("show");
}
function myFunctionFive() {
    document.getElementById("myDropdownFive").classList.toggle("show");
}
function myFunctionSix() {
    document.getElementById("myDropdownSix").classList.toggle("show");
}
function myFunctionSeven() {
    document.getElementById("myDropdownSeven").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}