$(document).ready(function () {
    //create and positioning  the goal area.
    var $goalAreaDiv;
    var distance_btwn_goalArea = 57;

    for (var i = 0; i < 10; i++) {
        $goalAreaDiv = $('<div class="goal-area-section" style=top:' + i * distance_btwn_goalArea + "px" + ' ><span>' + (10 - i) + '</span> </div>');
        $("#goal-area").append($goalAreaDiv);
    }

    // Create dynamic  balls inside the main-canvas.
    var $randomBallDiv;

    for (var i = 0; i < 10; i++) {
        $randomBallDiv = $('<div class="foot-ball-common roller" id="roller_' + i + '" style=top:' + parseInt(470 + i * 10) + "px" + '></div>');
        $("#main-canvas").append($randomBallDiv);
    }

    // Start button click functionality.
    $("#start-button").click(function () {
        $("#start-button").attr('disabled','disabled');
        var ballHitting_speed = 400;
        $("#striker_ball").animate({
            left: "+=85px"
        }, ballHitting_speed, "easeInOutQuart", function () {
            $("#splitter_ball").animate({
                top: "-=50px",
                left: "+=100px"
            }, ballHitting_speed, "easeInOutQuart", function () {
                $("#splitter_ball").hide();
                $(".roller").fadeIn('500', function () {
                    //Dynamically changing the width,top and left position of ball.
                    for (var i = 0; i < 10; i++) {
                        $("#roller_" + i).animate({
                            left: "749px",
                            top: parseInt(15 + i * distance_btwn_goalArea) + "px",
                            width: "50px",
                            height: "50px"
                        }, 2000);
                    }
                });
            });
        });
    });

    // Reset functionality .
    $("#reset-button").click(function () {
        $("#striker_ball").css({ "left": "37px" });
        $("#splitter_ball").show();
        $("#splitter_ball").css({ "top": "560px", "left": "165px" });
        $(".roller").css({ "display": "none" });
        for (var i = 0; i < 10; i++) {
            $("#roller_" + i).clearQueue();
            $("#roller_" + i).stop();
            $("#roller_" + i).css({ "top": parseInt(470 + i * 10) + "px", "width": "16px", "height": "16px", "left": "277px" })
        }
        $("#start-button").removeAttr('disabled');
    });
});
