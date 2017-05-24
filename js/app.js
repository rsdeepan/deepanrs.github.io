/**
* When the page has been loaded, fade out the loading-screen div
* and remove the overflow hidden in the body
*/
$(window).on("load", function() {
	//fade out the loading div so that the body div is shown
	$("#loading").delay(350).fadeOut("slow");
	//overflow has been hidden to avoid the scroll bar
	//It will be reset to visible after the loading screen is removed
	$("body").delay(350).css({"overflow":"visible"});
});