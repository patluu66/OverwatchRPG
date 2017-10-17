  var healthPoints;
  var attackPower = 8;
  var countAttackPower = 10;
  
  var userHP;
  var computerHP;
  var count = 1;
  var totalAttackP;
  var roundEnded = false;
  var round2Ended = false;
  var numberOfRound = 1;


  function reset() {
    startGame();
  }


  function startGame() {

    $(document).ready(function(){

      $(".SanZang2").hide();
      $(".Winston2").hide();
      $(".RoadHog2").hide();
      $(".ReinHart2").hide();

      $(".ReinHart").click(function(){
        userHP = $("#healthReinHartUser").text();
        // console.log("reienhart: " + userHP);
        $(".SanZang").hide();
        $(".Winston").hide();
        $(".RoadHog").hide();

        $(".SanZang2").show();
        $(".Winston2").show();
        $(".RoadHog2").show();

      });

      $(".SanZang").click(function(){
        userHP = $("#healthSanZangUser").text();
        $(".ReinHart").hide();
        $(".Winston").hide();
        $(".RoadHog").hide();

        $(".ReinHart2").show();
        $(".Winston2").show();
        $(".RoadHog2").show();
      });

      $(".Winston").click(function(){
        userHP = $("#healthWinstonUser").text();
        $(".SanZang").hide();
        $(".ReinHart").hide();
        $(".RoadHog").hide();
        
        $(".ReinHart2").show();
        $(".SanZang2").show();
        $(".RoadHog2").show();
      });

      $(".RoadHog").click(function(){
        userHP = $("#healthRoadHogUser").text();
        $(".SanZang").hide();
        $(".Winston").hide();
        $(".ReinHart").hide();
        
        $(".ReinHart2").show();
        $(".SanZang2").show();
        $(".Winston2").show();
      });

//row 3 defender


      $(".ReinHart2").click(function(){
        $(".ReinHart2").remove();
        $(".row3").html('<div class="col ReinHart3"><p id="name">Wujing ReinHart</p><img class="crystal-image" src="OverWatch/reinhardt2.jpg" alt="Genji"><p id="healthReinHartComputer">100</p></div>');
        $(".Winston2").off("click");
        $(".RoadHog2").off("click");
        $(".SanZang2").off("click");
        computerHP = $("#healthReinHartComputer").text();
        // console.log(computerHP);

      });

      $(".SanZang2").click(function(){
        $(".SanZang2").remove();
        $(".row3").html(' <div class="col SanZang3"><p id="name">SanZang</p><img class="crystal-image" src="OverWatch/zen.jpg" alt="Hanzo"><p id="healthSanZangComputer">120</p></div>');
        $(".Winston2").off("click");
        $(".RoadHog2").off("click");
        $(".ReinHart2").off("click");
        computerHP = $("#healthSanZangComputer").text();
        
      });

      $(".Winston2").click(function(){
        $(".Winston2").remove();
        $(".row3").html('<div class="col Winston3"><p id="name">Wukung Winston</p><img class="crystal-image" src="OverWatch/wukung.jpg" alt="Hanzo"><p id="healthWinstonComputer">180</p></div>');
        $(".SanZang2").off("click");
        $(".RoadHog2").off("click");
        $(".ReinHart2").off("click");
        computerHP = $("#healthWinstonComputer").text();

      });

      $(".RoadHog2").click(function(){
        $(".RoadHog2").remove();
        $(".row3").html('<div class="col RoadHog3"><p id="name">Bajie RoadHog</p><img class="crystal-image" src="OverWatch/roadhog2.jpg" alt="Hanzo"><p id="healthRoadHogComputer">150</p></div>');
        $(".SanZang2").off("click");
        $(".Winston2").off("click");
        $(".ReinHart2").off("click");
        computerHP = $("#healthRoadHogComputer").text();
      });


//attack

      $(".attack").click(function() {
        totalAttackP = attackPower * count;

        //reduce computer HP and userHP when press attack  


        if(roundEnded === false) {
          computerHP -= totalAttackP;
          userHP -= countAttackPower;
        }    

        if($(".row3").text() === "") {
          alert("Please select a character to fight");
        }

        if(roundEnded && $(".row3").text() !== "") {
            computerHP -= totalAttackP;
            userHP -= countAttackPower;
            console.log("counterAttack: " + countAttackPower)
            $("#healthRoadHogComputer").text(computerHP);
            round2Ended = true;
        }


        console.log("total attackHP: " + totalAttackP);


        if(computerHP <= 0) {
          $(".ReinHart3").remove();
          roundEnded = true;


          $(".RoadHog2").click(function(){
            if(roundEnded === true) {
              $(".RoadHog2").remove();
              $(".row3").html('<div class="col RoadHog3"><p id="name">Bajie RoadHog</p><img class="crystal-image" src="OverWatch/roadhog2.jpg" alt="Hanzo"><p id="healthRoadHogComputer">150</p></div>');
              $(".SanZang2").off("click");
              $(".Winston2").off("click");
              $(".ReinHart2").off("click");
              computerHP = parseInt($("#healthRoadHogComputer").text());
              // console.log("computer: " + computerHP);
              // roundEnded = true;
              numberOfRound = 2;

            }
          });
          
        }

        if(roundEnded === true && computerHP <= 0 && numberOfRound === 2) {
            $(".RoadHog3").remove();
            numberOfRound = 3;
            alert("end round 2");

            $(".Winston2").click(function(){
            if(numberOfRound === 3) {
              $(".Winston2").remove();
              $(".row3").html(' <div class="col Winston3"><p id="name">Wukung Winston</p><img class="crystal-image" src="OverWatch/wukung.jpg" alt="Hanzo"><p id="healthRoadHogComputer">180</p></div>');
              $(".SanZang2").off("click");
              $(".RoadHog2").off("click");
              $(".ReinHart2").off("click");
              computerHP = parseInt($("#healthRoadHogComputer").text());
               $("#healthRoadHogComputer").text(computerHP);
              // console.log("computer: " + computerHP);
              // roundEnded = true;
              numberOfRound = 4;

            }
          });
        }

        if(numberOfRound === 4 && computerHP <= 0) {
          $(".Winston3").remove();
          alert("You Won!");
          reset();
        }

        $("#healthReinHartComputer").text(computerHP);
        $("#healthSanZangUser").text(userHP);
        count++;

      });

    });
  }


  startGame();
  
