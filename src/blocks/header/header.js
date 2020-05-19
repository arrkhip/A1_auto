// mobile menu
$('.js-header__switch').click(function() {
	$(this).toggleClass('header__switch--open');
	$('.header__inner').toggleClass('header__inner--open');
	$('body').toggleClass('body-no-scroll');
});