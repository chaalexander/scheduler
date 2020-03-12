// variables
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);

var showtime = $("#currentDay").text(setTime);
console.log(showtime);

var newForm = $("<form>");
console.log(newForm);
$("#container").append(newForm);

var savedInput = [];

// creating functions
// time
function setTime() {
  var time = moment().format("MMMM Do YYYY, h:mm a");
  return time;
}
console.log(setTime());

// calendar
function createCalendar() {
  for (var i = 0; i < hours.length; i++) {
    var colorTime;
    if (moment().hour() === hours[i]) {
      colorTime = "present";
    } else if (moment().hour() < hours[i]) {
      colorTime = "future";
    } else if (moment().hour() > hours[i]) {
      colorTime = "past";
    }
    var guestInput = $(`<div class="input-group mb-3 ${colorTime}"><div class="input-group-prepend">
    <span class="input-group-text">${hours[i]}:00</span>
      </div>
      <input type="text" class="form-control ${colorTime}" id= "input">
      <div class="input-group-append">
        <span class="input-group-text"><button class= saveBtn><i class= 'fas fa-save'></i></span>
      </div>
      </div>`);
    $(newForm).append(guestInput);
  }

  function renderCalendar() {
    $("#input").text("");

    for (var i = 0; i < savedInput.length; i++) {
      var todo = savedInput[i];
      // var p = $("<p id='p'></p>");

      $("#input").text(todo);
      $("#input").attr("data-index", i);

      $("#input").append(".saveBtn");
    }

    // $("#input").attr("data-index", i);
    // $("#input").append(".saveBtn");
  }

  function init() {
    var storedCalendar = JSON.parse(localStorage.getItem("calendar"));
    if (storedCalendar !== null) {
      savedInput = storedCalendar;
    }

    renderCalendar();
  }

  function storedCalendar() {
    localStorage.setItem("calendar", JSON.stringify(savedInput));
  }

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log("you click me ");

    var calendarText = $("#input").val();

    // if (calendarText === "") {
    //   return;
    // }
    savedInput.push(calendarText);

    // $("#input").val(" ");
    renderCalendar();
    storedCalendar();
  });
  init();
}

$(document).ready(function() {
  setTime();
  createCalendar();
});
