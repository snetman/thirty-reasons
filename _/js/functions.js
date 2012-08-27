// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	// your functions go here
	
	// Show and hide the list-based nav
	
	$('#nav-toggle').find('a.show-nav').bind('click focus', function() {
  	$('#site-nav').toggleClass('is-hidden');
  	
	});
	/*
	$('.nav-primary').find('h3')
   .bind('click focus', function(){
      $(this).parent().toggleClass('expanded')
   });
   */
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/