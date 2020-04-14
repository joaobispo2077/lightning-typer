$("#btn-phrase").click(randomPhrase);
$("#btn-phrase-id").click(searchPhrase);

function randomPhrase() {
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", changePhrase)
    .fail(function() {
        $("#erro").show();
        setInterval(function() {
            $("#erro").hide();
        }, 4000);

    }).always(function () {
        $("#spinner").toggle();
    });
}


function changePhrase(data) {

        var phrase = $(".phrase");
        var numRandom = Math.floor(Math.random() * data.length);

        phrase.text(data[numRandom].texto);

        updatePhrase();

        updateTime(data[numRandom].tempo);

}

function searchPhrase() {
    $("#spinner").toggle();

    var phraseID = $("#phrase-id").val();

    var data = { id: phraseID};
    $.get("http://localhost:3000/frases", data, afterSearchChange)
    .fail(function() {
        $("#erro").show();
        setInterval(function() {
            $("#erro").hide();
        }, 4000);

    }).always(function () {
        $("#spinner").toggle();
    });

}

function afterSearchChange(data) {
    var phrase = $(".phrase");
    phrase.text(data.texto);

    updatePhrase();
    updateTime(data.tempo);
}
