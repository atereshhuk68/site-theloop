document.addEventListener("DOMContentLoaded", () => {
	//! Mobile menu
	const hamburger = document.querySelector(".hamburger");
	const mobileMenu = document.querySelector(".mobile-menu");

	const toggleMobileMenu = () => {
		hamburger.classList.toggle("is-active");
		mobileMenu.classList.toggle("mobile-menu--active");
		document.body.classList.toggle("no-scroll");
	};

	hamburger.addEventListener("click", toggleMobileMenu);

	//! slider
	const swiper = new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 200
			},
			690: {
				slidesPerView: 2,
				spaceBetween: 60
			},
			880: {
				slidesPerView: 1,
				spaceBetween: 50
			}
	}});
});
