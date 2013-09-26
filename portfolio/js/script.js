$(window).load(function() {
	$("#preloader").delay(350).slideUp();
	$("#container").delay(800).fadeIn(1000);
	$("article").each(function(index){
		$(this).hide().delay(1400).slideDown(600);
	});
});