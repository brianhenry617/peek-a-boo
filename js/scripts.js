/*
fadeIn(), .fadeOut(), .fadeToggle(), .slideDown(), .slideUp(), and .slideToggle().
*/

$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-hidden").toggle("slow", function() {
        $("#walrus-hidden").fadeToggle();
        //$("#walrus-hidden").toggle("slow");
    });
  });
    $("img").click(function() {
      $("#walrus-showing").toggle("slow", function() {
      $("#walrus-showing").fadeIn();
        //$("#walrus-showing").toggle("slow");

      });
    });
});
