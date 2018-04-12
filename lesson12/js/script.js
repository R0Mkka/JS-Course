$(document).ready(function() {

	$('.header-menu a:eq(1)').on('click', modalActions);

	$('.main_btna').on('click', modalActions);

	$('.main_btn').on('click', modalActions);

	$('.cross').on('click', function(){
		$('.overlay').fadeOut('slow');

// реализация уплывания модального окна с помощью готовой функции
//		$('.modal').slideUp(800);

// реализация появления модального окна снизу вручную
		$('.modal').animate(
		{
			marginTop: '-500px'
		}, 800, function () {
			$('.modal').hide();
		});
	});

	$('.form').submit(function(event) {
		event.preventDefault();

		let $form = $('.form');
		
		$.ajax({
          type: $form.attr('POST'),
          url: $form.attr('server.php'),
          data: $form.serialize(),
          success: function(){
          	alert('Спасибо! Вскоре мы с вами свяжемся.')
          },
          error: function(){
          	alert('Произошла ошибка!');
          }
        });
	});
        
	function modalActions() {
		$('.overlay').fadeIn('slow');

// реализация появления модального окна "сверху" с помощью готовой функции
//		$('.modal').slideDown(800);

// реализация появления модального окна сверху вручную
		$('.modal').css('margin-top', function(){
			return '-500px';
		});

		$('.modal').show();

		$('.modal').animate(
		{
			marginTop: '100px'
		}, 800);
	}
});