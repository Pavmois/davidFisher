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

//ВЫЕЗЖАНИЕ И ИСЧЕЗАНИЕ МЕНЮ
let $window = $(window),
    lastScrollTop = 0;
function onScroll (e) {
    let top = $window.scrollTop();
    if (lastScrollTop > top) {
        console.log('top');
        $('.menu').css('top', '0%')
    } else if (lastScrollTop < top) {
        console.log('down');
        $('.menu').css('top', '-10%')
    }
    lastScrollTop = top;
}
$window.on('scroll', onScroll);

