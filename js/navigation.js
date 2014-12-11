// could have done it without jQuery but I generally default to it if I have to support IE8
(function(){

	'use strict';

	//apply class on body and inject toggle nav button code on the page
	$("body").attr("class", "js-nav-hidden");
	$(".page").prepend('<p class="nav-toggle"><a href="#" class="js-toggle-nav">Toggle Nav</a></p>');

	//variables
	var	nav_visible	= true;

	//when button clicked
	$(".js-toggle-nav").click(function(e){

		//prevent default link behaviour
		e.preventDefault();

		//toogle classes on body element
		$("body").toggleClass("js-nav-hidden js-nav-visible");
		nav_visible = (nav_visible === true) ? false : true;
	});
	
}());
