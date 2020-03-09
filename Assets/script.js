// variables
var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
console.log(hours);

var showtime = $("#currentDay").text(setTime);
console.log(showtime);

var newDiv = $("<div>");
console.log(newDiv);
$("#container").append(newDiv);

var newForm = $("<form>");
console.log(newForm);
$(newDiv).append(newForm);

// creating functons
// time
function setTime() {
  var time = moment().format("MMMM Do YYYY, h:mm a");
  return time;
}
console.log(setTime());

// calendar
function createCalendar() {
  for (var i = 0; i < hours.length; i++) {
    var guestInput = $(
      "<input type= 'text' placeholder= 'What is up!' class= guest>"
    );
    console.log(guestInput);
    $(newForm).append(guestInput);

    var btn = $("<button class= saveBtn><i class= 'fa fa-save'></i>");
    console.log(btn);
    $(guestInput).after(btn);
  }
}

// $("#container").html(createCalendar);

$(document).ready(function() {
  setTime();
  createCalendar();
});
