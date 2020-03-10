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

var savedArray = JSON.parse(localStorage.getItem("calendar")) || [];

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
    $("#container").append(guestInput);

    // var guestInput = $(
    //   "<input type= 'text' placeholder= 'What is up!' class= guest>"
    // );
    // console.log(guestInput);
    // $(newForm).append(guestInput);

    // var btn = $("<button class= saveBtn><i class= 'fas fa-save'></i>");
    // console.log(btn);
    // $(guestInput).after(btn);
  }

  // $(".saveBtn").on("click", function() {
  //   console.log("you click me ");
  //   event.preventDefault();
  //   localStorage.setItem("calendar", JSON.stringify(savedArray));
  //   localStorage.getItem("calendar");
  //   $(".guest").text(savedArray);
  // });
}

// $("#container").html(createCalendar);

$(document).ready(function() {
  setTime();
  createCalendar();
});
