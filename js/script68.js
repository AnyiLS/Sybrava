$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block');

		localStorage.setItem('slide68-1', 'true');

		if (['slide68-2', 'slide68-3'].every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-1', 'true')
		}

		$('.cursor').hide();
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block');
		
		localStorage.setItem('slide68-2', 'true');

		if (['slide68-1', 'slide68-3'].every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-1', 'true')
		}

		$('.cursor1').hide();
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		$('.modal2').css('display', 'block');
		
		localStorage.setItem('slide68-3', 'true');

		if (['slide68-1', 'slide68-2'].every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-1', 'true')
		}

		$('.cursor2').hide();
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})
})
