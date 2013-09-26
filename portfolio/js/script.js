$(document).ready(function() {
	var article = $('#section').size();

	$("#container").hide();
});

$(window).load(function() {
	$("#container").hide().delay(100).fadeIn();

	$("article").each(function(index){
		$(this).hide().delay(500).slideDown();
	});
});