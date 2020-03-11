// variables
var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);

var showtime = $("#currentDay").text(setTime);
console.log(showtime);

var newDiv = $("<div>");
console.log(newDiv);
$("#container").append(newDiv);

var newForm = $("<form>");
console.log(newForm);
$(newDiv).append(newForm);

var savedInput = JSON.stringify(localStorage.getItem("calendar")) || " ";

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
      <input type="text" class="form-control ${colorTime}">
      <div class="input-group-append">
        <span class="input-group-text"><button class= saveBtn><i class= 'fas fa-save'></i></span>
      </div>
      </div>`);
    $(newForm).append(guestInput);
  }

  $(".saveBtn").on("click", function(event) {
    console.log("you click me ");
    event.preventDefault();

    localStorage.setItem("calendar", JSON.stringify(savedInput.length));

    for (var i = 0; i < savedInput.length; i++) {
      $(".form-control").text(" ");
      var info = $("<p class= include ></p>");
      $(".form-control").append(info);
      JSON.parse(localStorage.getItem("calendar"));
      $(info).text(savedInput.length);
    }
  });
}

$(document).ready(function() {
  setTime();
  createCalendar();
});
