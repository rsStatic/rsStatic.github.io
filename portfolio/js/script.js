$(window).load(function() {
	$("#loader").css("background", "none");
	$("#container").hide().delay(100).fadeIn();

	$("article").each(function(index){
		$(this).hide().delay(500).slideDown();
	});
});