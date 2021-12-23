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

//ИГРА

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let flipNums = [];

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  flipNums.push('1')
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 900);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


$('.resetBtn').on('click', function(){
  location.reload();
	console.log('PUSH');

	// $('.memory-card').removeClass('flip');
  //   (function shuffle() {
  //     cards.forEach(card => {
  //       let randomPos = Math.floor(Math.random() * 12);
  //       card.style.order = randomPos;
  //     });
  //   })();
  // resetBoard();
})

$("#mydiv").load(location.href + " #mydiv");

$('body').on('click', function() {
  console.log('ARRAY', flipNums.length);
  if (flipNums.length === 6) {
    alert('ПОБЕДА');
  }
})