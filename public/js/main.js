
var phrase = $(".phrase").text();
var numWords = phrase.split(" ").length;

var lengthPhrase = $("#length-phrase");
lengthPhrase.text(numWords);
