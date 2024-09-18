document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.navbar__toggle');
	const menu = document.querySelector('.navbar__menu');
	const body = document.body;

	const handleNav = () => {
		menu.classList.toggle('navbar--active__menu'); // Pokazuje menu
		body.classList.toggle('navbar--active'); // Zablokowanie przewijania strony
	};

	toggleButton.addEventListener('click', handleNav);
});