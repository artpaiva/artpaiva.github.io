"use strict";
var scrolled = false;
window.onscroll = function (){ 
	"use strict";
	console.log("scroll");
	var bar  = document.getElementById('barra');
	if (document.body.scrollTop > 20 ) {
		bar.classList.add("scrolled");
	} 
	else {
		bar.classList.remove("scrolled");
	}
};
function openInfo(caller){
	caller.classList.toggle('active');
	document.getElementById('marqueeInfo').classList.toggle('active');
}
function toTop(){
	document.body.scrollTo(0, 0);
}

window.onload = function () {
	var tips = document.getElementsByClassName('board-tip');
	for(var i=0; i < tips.length; i++){
		tips[i].style.marginLeft = -1 * tips[i].clientWidth/2;
	}
}
