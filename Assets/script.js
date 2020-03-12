// variables
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);

var showtime = $("#currentDay").text(setTime);
console.log(showtime);

var newForm = $("<form>");
console.log(newForm);
$("#container").append(newForm);
// var savedInput = JSON.stringify(localStorage.getItem("calendar")) || " ";

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
      <input type="text" class="form-control   ${colorTime}">
      <div class="input-group-append">
        <span class="input-group-text"><button class= saveBtn><i class= 'fas fa-save'></i></span>
      </div>
      </div>`);
    $(newForm).append(guestInput);
  }

  $(".saveBtn").on("click", function(event) {
    event.preventDefault();
    console.log("you click me ");

    // is returning function stringify() { [native code] }

    // $(".form-control").html(JSON.parse(localStorage.getItem("calendar")));
    // var item = $(".form-control").val;
    // if (item) {
    //   localStorage.setItem(
    //     "calendar",
    //     JSON.stringify,
    //     $(".form-control").html()
    //   );
    //   $(".form-control").val("");
    // }

    // returning null
    // var savedInput = [];
    // localStorage.setItem("calendar", JSON.stringify(savedInput.length));
    // var data = JSON.parse(localStorage.getItem("calendar"));
    // savedInput.push(guestInput.value);
    // localStorage.setItem("calendar", JSON.stringify(savedInput));

    // for (var i = 0; i < savedInput; i++) {
    //   $(".form-control").text(" ");
    //   var info = $("<p class= include ></p>");
    //   $(".form-control").append(info);
    //   JSON.parse(localStorage.getItem("calendar"));
    //   $(".form-control").text(savedInput).val;
    // }
  });
}

$(document).ready(function() {
  setTime();
  createCalendar();
});
