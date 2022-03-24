
AOS.init();
var height = $("#header").height(); 
	$(window).scroll(function(){
		if( $(this).scrollTop() > height){
			$(".nav").addClass('fixed');
		}else{
			$(".nav").removeClass('fixed');
		}
	});

// Smooth Scrool
let getStart = document.getElementById('get-start');
getStart.addEventListener('click',smoothScrrol);
function smoothScrrol(){
	window.scroll({
		top: 700,
		left: 0,
		behavior: 'smooth'
	});
};
var gotopPag = document.getElementById('to-top');

gotopPag.addEventListener('click',gotoTop);
function gotoTop(){
	window.scroll({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
};
console.log(gotopPag);