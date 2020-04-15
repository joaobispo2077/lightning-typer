    var initTime = $("#time-digitation").text();

    var field = $(".field-digitation");

$(
    function () {
        updatePhrase();
        initCounts();
        initCrono();
        initMarks();
        $("#btn-restart").click(restartGame);
        updateScore();

        $('#users').selectize({
            create: true,
            sortField: 'text'
        });

        $('.tooltip').tooltipster({
            trigger: "custom"
        });

    }
);



function updatePhrase() {


    var phrase = $(".phrase").text();
    var numWords = phrase.split(" ").length;

    var lengthPhrase = $("#length-phrase");
    lengthPhrase.text(numWords);

}

function updateTime(time) {

    initTime = time;
    $("#time-digitation").text(time);

}








function initCounts() {

    field.on("input", function(){

        // var content = field.val();
        //
        // var qtdWords = (content.split(/\S+/).length - 1);
        //
        // $("#count-words").text(qtdWords);
        //
        // var qtdChar = content.length;
        // $("#count-char").text(qtdChar);

        $("#count-words").text(field.val().split(/\S+/).length - 1);

        $("#count-char").text(field.val().length);
    });

}




function initCrono() {


    field.one("focus", function(){
        var timeOut = $("#time-digitation").text();

        $("#btn-restart").attr("disabled", true);

        var cronoID = setInterval(function(){

            timeOut--;
            $("#time-digitation").text(timeOut);

            if (timeOut < 1) {

                clearInterval(cronoID);
                $("#btn-restart").attr("disabled", false);
                finishGame();

            }

        } , 1000);

    });

}

function finishGame() {
    field.attr("disabled", true);
    field.addClass("field-disabled");
    insertScore();
}


function initMarks(){

    field.on("input", function(){
        var phrase = $(".phrase").text();

        var typed = field.val();
        var compar  = phrase.substr(0, typed.length);

        if (typed == compar) {
            field.removeClass("border-red");
            field.addClass("border-green");

        } else {
            field.removeClass("border-green");
            field.addClass("border-red");
        }

    });

}





function restartGame() {
    field.removeClass("border-green");
    field.removeClass("border-red");

    field.removeClass("field-disabled");

    $("#time-digitation").text(initTime);
    field.val("");
    field.attr("disabled", false);

     $("#count-words").text("0");
     $("#count-char").text("0");

     initCrono();
}
