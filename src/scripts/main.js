
$(document).ready(function(e) {
	let modalContacts = $('.contacts-modal'),
		modalBtn = $('.contacts-modal__btn');
	
	modalBtn.on('click', function(e) {
		e.preventDefault();
		modalContacts.removeClass('is-visible');
	});


	
	let 
		images = document.images,
		images_total_count = images.length,
		images_loaded_count = 0,
		preloader = document.getElementById('page-preloader'),
		perc_display = document.getElementById('load-perc');


	for (let i = 0; i < images_total_count; i++){
		image_clone = new Image();
		image_clone.onload = image_loaded;
		image_clone.onerror = image_loaded;
		image_clone.src = images[i].src;
	}

	function image_loaded(){
		images_loaded_count++;
		perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count) << 0) + '%';//<<0 побитовая операция, чтобы было видно только целую часть
		if (images_loaded_count >= images_total_count){
			setTimeout(function(){
				if (!preloader.classList.contains('done')){
					preloader.classList.add('done');
				}
			},1000);
		}
	};
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

timer('Jan 1, 2019 00:00:00'); // Вводим необходимую дату мероприятия
