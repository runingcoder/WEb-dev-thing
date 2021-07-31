const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl= document.getElementById('seconds');
const gametime = "2 Sept 2021";

function countdown() {
const gameDate = new Date(gametime);
const currentDate =new Date();
// since the answer is in milliseconds
const totalseconds = (gameDate - currentDate) /1000;
const days = Math.floor(totalseconds /86400);


const hours = Math.floor((totalseconds/3600) %24);
const mins = Math.floor((totalseconds/60) %60);
const seconds = Math.floor(totalseconds %60);

daysEl.innerHTML = days;
hoursEl.innerHTML = formatTime(hours);
minsEl.innerHTML = formatTime(mins);
secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;

}
//initial call
countdown();
setInterval(countdown, 1000);
