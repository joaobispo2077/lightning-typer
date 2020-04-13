function insertScore() {

    var tBody = $(".score").find("tbody");
    var userName = "Joa0";
    var numWords = $("#count-words").text();

    var line = newLine(userName, numWords);

    line.find(".btn-remove").click(removeLine);

    tBody.prepend(line);


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
    $(this).parent().parent().remove();
}
