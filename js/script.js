'use strict'

const gotoLinks = document.querySelectorAll('.nav__link[data-goto]');
const headerBlock = document.querySelector('header');
const headerBefore = getComputedStyle(headerBlock, '::before');
const html = document.body;

const burgerBtn = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');


const headerCart = document.querySelector('.header__cart');
const headerBtn = document.querySelector('.header__btn');
const headerBtnsBody = document.querySelector('.btns__body');


if(window.innerWidth <= 992) {
	headerNav.append(headerBtnsBody);
} 

if (gotoLinks.length > 0) {
	gotoLinks.forEach(gotoLink => {
		gotoLink.addEventListener('click', onGotoLinkClick);
	});
	function onGotoLinkClick(e) {
		const gotoLink = e.target;
		if (gotoLink.dataset.goto && document.querySelector(gotoLink.dataset.goto)) {
			const gotoBlock = document.querySelector(gotoLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
			//const gotoBlockValueHeader = gotoBlock.getBoundingClientRect().top + scrollY - headerBlock.offsetHeight;//??если header fixed
			const gotoBlockValueBefore = gotoBlock.getBoundingClientRect().top + scrollY - parseInt(headerBefore.height);
			
			if(burgerBtn.classList.contains('_active')) {
				burgerBtn.classList.remove('_active');
				headerNav.classList.remove('_active');
				document.body.classList.remove('_lock');
			}
			
					window.scrollTo({
					top: gotoBlockValue,
					behavior: 'smooth',
				});


			

			e.preventDefault();

		}
	}
}

if (burgerBtn) {
	burgerBtn.addEventListener('click', function (e) {
		burgerBtn.classList.toggle('_active');
		headerNav.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}


/*
const modalCloseBtn = document.querySelector('.modal__close');
const modalWindow = document.querySelector('.modal');
*/
/*
contactBtn.addEventListener('click', function (e) {
	modalWindow.classList.toggle('_active');
	document.body.classList.add('_lock');
	e.preventDefault();
});

modalCloseBtn.addEventListener('click', function (e) {
	modalWindow.classList.remove('_active');
	document.body.classList.remove('_lock');
});

let unShowModal;
*/
/* //?? закрытие modal при нажатии не на modal //недоделано
if(modalWindow.classList.contains('_active')) {
	document.addEventListener('click', unShowModal);

	unShowModal = function(e) {
		if (!e.target.closest('.modal')) {
			console.log("asd");
			modalWindow.classList.remove('_active');
			document.body.classList.remove('_lock');
			}
		}
} else {
	document.removeEventListener('click', unShowModal);
}
*/







