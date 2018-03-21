$(document).ready(function(){
  $("form#booking-form").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var apptInput = $("#appt-discription").val();
    var dateTimeInput = $("#date-time").val();

    $(".user-output").append("<p>" + nameInput + "</p>");
    $(".user-output").append("<p>" + apptInput + "</p>");
    $(".user-output").append("<p>" + dateTimeInput + "</p>");

    $(".apt-booked-screen").show();
    $("#spa-first-page").hide();
  });
});
