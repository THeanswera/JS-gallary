function curentSlide(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide')

	slides[activeSlide].classList.add('active');

for (const slide of slides) {
	slide.addEventListener('mousemove', () => {
		clearActiveClasses()
		slide.classList.add('active');
	})
}

function clearActiveClasses () {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	})
}
}

curentSlide(0);