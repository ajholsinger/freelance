$(document).ready(function() {
  //sidebar menu toggle
  $(".icon-button").on("click", function() {
    $(".sidebar").toggleClass("active");
    $(".icon-button").toggleClass("toggleBtnActive");
  });
  function bigger() {
  $(this).css("width", "20px", "height", "20px")
}
});
