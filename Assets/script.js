$(document).ready(function() {
  // variables

  var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  console.log(hours);

  var showtime = $("#currentDay").text(setTime);
  console.log(showtime);

  // creating functons
  // time
  function setTime() {
    var time = moment().format("MMMM Do YYYY, h:mm a");
    return time;
  }
  console.log(setTime());

  // calendar
  function createCalendar() {
    var newDiv = $("<div>");
    console.log(newDiv);
    $("#container").append(newDiv);

    var newForm = $("<form>");
    console.log(newForm);
    $(newDiv).append(newForm);

    for (var i = 0; i < hours.length; i++) {
      var guestInput = $("<input type= text class= guest>");
      console.log(guestInput);
      $(newForm).append(guestInput);

      var btn = $("<button class= saveBtn>").text("save");
      console.log(btn);
      $(btn).attr("data-index", i);
      $(guestInput).append(btn);
    }
  }

  $("#container").html(createCalendar);
});
