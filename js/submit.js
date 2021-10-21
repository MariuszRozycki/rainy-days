$(document).ready(function () {
  $('#form').submit(function () {
    if (!attributeSupported("required") || ($.browser.safari)) {
      $("#form [required]").each(function (index) {
        if (!$(this).val()) {
          alert("Please fill all required fields.");
          return false;
        }
      });
    }
    return false;
  });
  console.log($('#form'));
});