$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
  });
  $("#btn-coupon").click(function () {
    $("#disocount-bar").show();
    $(this).text("Applied");
    $(this).removeClass("btn-applied");
  });

  // payment plan
  var radio1 = $("#radio-1");
  var radio2 = $("#radio-2");

  $("#payOption-1").click(function () {
    $(this).toggleClass("checked-pay");

    radio1.prop("checked", !radio1.prop("checked"));

    if (!radio2.prop("checked")) {
      $("#payOption-2").removeClass("checked-pay");
    }
  });

  $("#payOption-2").click(function () {
    $(this).toggleClass("checked-pay");

    radio2.prop("checked", !radio2.prop("checked"));

    if (!radio1.prop("checked")) {
      $("#payOption-1").removeClass("checked-pay");
      console.log("unchecked");
    }
  });

  var credit = $("credit-pay");
  var paypal = $("paypal-pay");

  $("#credit-pay").click(function () {
    $(this).toggleClass("checked-pay");
    $(`#credit-pay .check`).toggle();

    $("#paypal-pay").removeClass("checked-pay");
    $("#paypal-pay .check").hide();
  });

  $("#paypal-pay").click(function () {
    $(this).toggleClass("checked-pay");
    $(`#paypal-pay .check`).toggle();

    $("#credit-pay").removeClass("checked-pay");
    $("#credit-pay .check").hide();
  });
});
