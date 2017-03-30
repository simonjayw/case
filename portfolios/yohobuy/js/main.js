function addLoadEvent(func){
  var oldonload = window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  }else {
    window.onload = function(){
      oldonload();
      func();
    }
  }
}

	
var timer=null;
var backbtn = document.getElementById('back-top');
function backTop(){
	backbtn.onmouseover = function (){
		backbtn.style.opacity = "1";
	}
	backbtn.onmouseout = function(){
		backbtn.style.opacity = "0.6";
	}
	backbtn.onclick = function(){
		clearInterval(timer);
		timer = setInterval('scrollMove()',1)
	}
	window.onscroll = function(){
		scrollTest();
	}
	scrollTest();
}
function scrollMove(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollHight = scrollTop-100;
	window.scrollTo(0,scrollHight);

	if (scrollHight < 0) {
		clearInterval(timer);
		scrollTop = 0;
	}
}
function scrollTest(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop < 100) {
		backbtn.style.display = "none";
	}else{
		backbtn.style.display = "block";
	}
}
addLoadEvent(backTop);


$(document).ready(function(){
    $('#ads').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true

    });
    $('#brand-roll').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });
});