const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

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
