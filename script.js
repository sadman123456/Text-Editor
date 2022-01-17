var text = $("#text");

var Bold = $("#bold");
var Italic = $("#italic");
var Underline = $("#underline");

var left = $("#leftAlign");
var center = $("#centerAlign");
var right = $("#rightAlign");

var fontSize = $("#fontSize");

$(text).on("keyup", function (e) {
  var myLength = text.text().length;
  $("#word").html(myLength + "/256");
  if (myLength > 256) {
    $("#word").css("color", "red");
  } else {
    $("#word").css("color", "white");
  }
});

$("#fontSize").on("keyup", function (e) {
  let fontsize = this.value;
  fontsize = parseInt(fontsize);
  text.css("fontSize", fontsize);
  document.execCommand("fontSize", false, this.value);
});

$(Bold).on("click", function () {
  text.toggleClass("bold");
  Bold.toggleClass("focus");
  document.execCommand("bold");
});
$(Italic).on("click", function () {
  text.toggleClass("italic");
  Italic.toggleClass("focus");
  document.execCommand("italic");
});

$(Underline).on("click", function () {
  text.toggleClass("underline");
  Underline.toggleClass("focus");
  document.execCommand("underline");
});

$(left).on("click", function () {
  document.execCommand("justifyLeft");
});
$(center).on("click", function () {
  document.execCommand("justifyCenter");
});
$(right).on("click", function () {
  document.execCommand("justifyRight");
});
