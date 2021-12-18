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

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  console.log('adadw');