// Initialize AOS Animation
//AOS.init();

//Initialize GNMenu
$(document).ready(function(){
	new gnMenu( document.getElementById( 'gn-menu' ) );
});

//Initialize Slideshow
$(document).ready(function(){
	$(function() {
		cbpBGSlideshow.init();
	});
});

//Timer
function cdtd() {
	var candere = new Date("Dec 02, 2022 18:00:00");
	var now = new Date();
	var timeDiff = candere.getTime() - now.getTime();
	if (timeDiff <= 0) {
		clearTimeout(timer);
		document.getElementById("timerFunc").innerHTML = "";
	}
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	document.getElementById("daysBox").innerHTML = days;
	document.getElementById("hoursBox").innerHTML = hours;
	document.getElementById("minsBox").innerHTML = minutes;
	document.getElementById("secsBox").innerHTML = seconds;
	var timer = setTimeout("cdtd()", 1000);
}