$(document).ready(function() {
  $(".icon-button").on("click", function() {
    $(".sidebar").toggleClass("active");
    $(".icon-button").toggleClass("toggleBtnActive");
  });
});
