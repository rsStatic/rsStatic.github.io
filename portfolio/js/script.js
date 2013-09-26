$(window).load(function() {
	$("#loader").css("background", "none");
	$("#container").hide().fadeIn();

	$("article").each(function(index){
		$(this).hide().delay(600).slideDown();
	});
});