$("#btn-score").click(showScore);
$("#btn-sync").click(syncScore);

function insertScore() {

    var tBody = $(".score").find("tbody");
    var userName = $("#users").val();
    var numWords = $("#count-words").text();

    var line = newLine(userName, numWords);

    line.find(".btn-remove").click(removeLine);

    tBody.prepend(line);

    $(".score").slideDown(500);
    scrollScore();
    console.log("Scroll"); //testar

}

function scrollScore(){

    var scorePosition = $(".score").offset().top;
    console.log("var scroll "); //testar

    $("body").animate({
        scrollTop: scorePosition + "px",
    }, 1000);
    console.log("Scroll successful"); //testar

}

function newLine(userName, numWords) {
    var line = $("<tr>");
    var columnName = $("<td>").text(userName);
    var columnWords = $("<td>").text(numWords);
    var columnRemove = $("<td>");

    var link = $("<a>").attr("href","#").addClass("btn-remove");
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icon);

    columnRemove.append(link);


    line.append(columnName);
    line.append(columnWords);
    line.append(columnRemove);

    return line;
}

function removeLine(event) {
    event.preventDefault();
    var line = $(this).parent().parent();
    line.fadeOut(1000);
    setTimeout(function () {
        line.remove();
    }, 1200);
}

function showScore (){
    $(".score").stop().slideToggle(1000);
}

function syncScore() {
    var scoreBoard = [];
    var lines = $("tbody>tr");

    lines.each(function () {
        var user = $(this).find("td:nth-child(1)").text();
        var numWords = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: user,
            pontos: numWords
        };

        scoreBoard.push(score);

        });

        var data = {
            placar: scoreBoard
        };

        $.post("http://localhost:3000/placar", data, function(){

            console.log("Sync-Success");
            $(".tooltip").tooltipster("open").tooltipster("content", "Success Sync");
        }).fail(function () {

                $(".tooltip").tooltipster("open").tooltipster("content", "Fail Sync");

        }).always(function () {
            setInterval(function() {
                $(".tooltip").tooltipster("close");
            }, 2000);

        });
}


function updateScore() {
    $.get("http://localhost:3000/placar", function(data) {
        $(data).each(function () {
            var line = newLine(this.usuario, this.pontos);
            line.find(".btn-remove").click(removeLine);
            $("tbody").append(line);
        });
    });
}
