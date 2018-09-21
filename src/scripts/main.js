
$(document).ready(function(e) {
	let modalContacts = $('.contacts-modal'),
		modalBtn = $('.contacts-modal__btn');
	
	modalBtn.on('click', function(e) {
		e.preventDefault();
		modalContacts.removeClass('is-visible');
	});
});


/********** Timer ********/
function timer (event){

	//В миллисекундах
	const   second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

	let eventDate = new Date(event).getTime(),
		x = setInterval(function() {

			let nowDate = new Date().getTime(),
				distance = eventDate - nowDate;

			document.getElementById('timer-date').innerText = Math.floor(distance / day),
			document.getElementById('timer-hours').innerText = Math.floor((distance % day) / hour),
			document.getElementById('timer-minutes').innerText = Math.floor((distance % hour) / minute),
			document.getElementById('timer-seconds').innerText = Math.floor((distance % minute) / second);

		}, second)

};

timer('Sep 30, 2018 00:00:00'); // Вводим необходимую дату мероприятия
