// variables
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);
var showtime = $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
console.log(showtime);
var newForm = $("<form>");
console.log(newForm);
$("#container").append(newForm);
// creating functions

// calendar
function createCalendar() {
  $(newForm).empty();
  for (var i = 0; i < hours.length; i++) {
    var storedCalendar = localStorage.getItem(hours[i]);
    var todoText = "";
    if (storedCalendar) {
      todoText = storedCalendar
    }
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
<input type="text" class="form-control ${colorTime}" data=${hours[i]} value=${todoText}><div class="input-group-append">
<span class="input-group-text"><button class= "saveBtn"><i class= 'fas fa-save'></i></span>
</div>
</div>`);
    $(newForm).append(guestInput);
  }
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textInput = $(this).parent().parent().parent().children()[1].value;
    var key = $(this).parent().parent().parent().children()[1].getAttribute('data');
    localStorage.setItem(key, textInput);
    createCalendar();
  });
}

$(document).ready(function () {

  createCalendar();
});