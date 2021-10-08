function myFunction() {
	var nav = document.getElementById('navbar');
	var scr = document.getElementById('scroll-up-btn');
	window.addEventListener('scroll', function () {
		if (this.scrollY > 20) {
			nav.classList.add('sticky');
		} else {
			nav.classList.remove('sticky');
		}

		if (this.scrollY > 500) {
			scr.classList.add('show');
		} else {
			scr.classList.remove('show');
		}
	});
}

function scrollUp() {
	$('html').animate({ scrollTop: 0 });
}

var typed = new Typed('.typing', {
	strings: ['Web Developer', 'Graphic Designer', 'Content Manager'],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

var typed = new Typed('.typing2', {
	strings: ['Web Developer', 'Graphic Designer', 'Content Manager'],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

$('.menu-btn').click(function () {
	$('.navbar .menu').toggleClass('active');
	$('.menu-btn i').toggleClass('active');
});

$('.carousel').owlCarousel({
	margin: 20,
	loop: true,
	autoplayTimeOut: 2000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: false
		}
	}
});
