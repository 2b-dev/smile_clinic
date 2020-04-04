$(".btn-hamberger-lg").on("click", function() {
  $(".animated-icon1").toggleClass("open");
  $(".side-menu-first").toggleClass("open");
});
$(".hamberger-sm").on("click", function() {
  $(".side-menu").toggleClass("open");
});
$(".btn-close-main-menu").on("click", function() {
  $(".side-menu").toggleClass("open");
});
$(".link-side-menu").on("click", function() {
  $(".side-menu-first").removeClass("open");
  $(".animated-icon1").removeClass("open");
});
$('[data-toggle="datepicker"]').datepicker({
  language: "th-TH"
});
$(".btn-file-picker").on("click", function() {
  $("#doc_upload").click();
});

$("#doc_upload").on("change", function() {
  var file = $("#doc_upload")[0].files[0];
  $(".txt-file-name").html(file.name);
});
