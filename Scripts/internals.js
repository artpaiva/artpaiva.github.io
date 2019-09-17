var scrolled = false;
window.onscroll = function (){ 
	var bar  = document.getElementById('barra');
	if (document.documentElement.scrollTop > 20 ) {
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
	document.documentElement.scrollTo(0, 0);
}

window.onload = function () {
	var tips = document.getElementsByClassName('board-tip');
	for(var i=0; i < tips.length; i++){
		tips[i].style.marginLeft = (tips[i].clientWidth/2 * -1) + "px";
	}
}
