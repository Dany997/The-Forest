document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.navbar__toggle');
	const menu = document.querySelector('.navbar__menu');
	const body = document.body;
	const navbar = document.querySelector('.navbar');
	const navLinks = document.querySelectorAll('.navbar__link'); // Pobieramy wszystkie linki w menu

	const handleNav = () => {
		menu.classList.toggle('navbar--active__menu'); // Pokazuje/ukrywa menu
		body.classList.toggle('navbar--active'); // Zablokowanie przewijania strony
	};

	toggleButton.addEventListener('click', handleNav);

	// Zamykanie menu po kliknięciu w link nawigacyjny
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			// Ukryj menu po kliknięciu w link
			menu.classList.remove('navbar--active__menu');
			body.classList.remove('navbar--active');
		});
	});

	// Dodanie obsługi "scroll" dla sticky effect
	window.addEventListener('scroll', function () {
		let scrollY = window.pageYOffset;

		if (scrollY > 100) {
			navbar.classList.add('navbar--scrolled');
		} else {
			navbar.classList.remove('navbar--scrolled');
		}

		// Obsługa aktywnych linków nawigacyjnych
		let sections = document.querySelectorAll('section');

		sections.forEach((section) => {
			let sectionHeight = section.offsetHeight;
			let sectionTop = section.offsetTop - 50; // Uwzględnia wysokość menu
			let sectionId = section.getAttribute('id');

			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				navLinks.forEach((link) => {
					link.classList.remove('active');
					if (link.getAttribute('href').includes(sectionId)) {
						link.classList.add('active');
					}
				});
			}
		});
	});
});
