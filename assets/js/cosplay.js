//ПЛАВНЫЙ ПЕРЕХОД ПО ССЫЛКЕ
$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(400);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(400, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});

$(".cosplay__bar-item" ).hover(function(){
	$(this).find('.item-txt').toggleClass('maskDown');
})