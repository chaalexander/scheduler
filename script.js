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
  newRow = $("<try>").append(".container");
  newBox = $("<input>").append("<tr>");
}
createCalendar();

// $(document).ready(function() {

// });
