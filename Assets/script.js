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
  newDiv.append("#calendarHours");

  var newForm = $("<form>");
  console.log(newForm);
  newForm.append("#newDiv");

  var btn = $("<button>").text("save");
  console.log(btn);
  btn.append(guestInput);

  for (var i = 0; i < hours.length; i++) {
    var guestInput = $("<input>");
    console.log(guestInput);
    guestInput.append(newForm);
  }
}
// $(".container").html(createCalendar());
// console.log(createCalendar());

$(document).ready(function() {
  setTime();
  createCalendar();
});
