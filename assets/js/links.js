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

$('.donat_secret').on('click', function() {
	$('.links_bg').toggleClass('secret');
	$('.donate').toggleClass('none');
	$('.links').toggleClass('none');


	if ($('.links_bg').hasClass('secret')) {
		$('.donat_secret').text('Назад')
		$('.donat_secret').css('color', 'red')
	} else {
		$('.donat_secret').html('Есть ли что-нибудь<br/>\nспособное поднять<br/>\nмне настроение?');
		$('.donat_secret').css('color', 'white')
	}
})
