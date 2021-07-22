var currentTimeEl = $('#current-time');
var saveBtn = $(".saveBtn");
var plan = $(".description");
var now

function displayTime() {
  var now = moment().format('MMMM Do YYYY, h:mm a');
  currentTimeEl.text(now);
}
setInterval(displayTime);

$('.saveBtn').on('click', savePlans);

var currentTime = moment().format("ha");

function savePlans(e){
  e.preventDefault();
  plan = $(this).siblings(".description").val();
  var time = $(this).siblings(".hour").attr("id");
  localStorage.setItem(time, plan);
  location.reload();

}

$(".time-block").each(function(){
  var hour = ($(this).children(".hour").attr("id"));
  $(this).children(".description").val(localStorage.getItem(hour))
  if (hour < currentTime) {
    $(this).removeClass("present future");
    $(this).addClass("past");
  }else if (hour === currentTime){
    $(this).removeClass("past future");
    $(this).addClass("present");
  }else{
    $(this).removeClass("past present");
    $(this).addClass("future");
  };
});

//still need to fix 12 hour clock


  //$('.hour').text(currentTime);

// jquery $(.timeBlock).each(function(){
// $(this).attr('id') 

// if (currentTime === nineAm) {
//   $("#event-9am").removeClass("past future").addClass("present");
// }
//}) 

