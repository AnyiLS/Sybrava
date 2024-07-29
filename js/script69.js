$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide69-2', 'slide69-3', 'slide69-4'];

		$('.modal').css('display', 'block')
		$('.reproduc').hide()
		$('.reproduc').trigger('pause');

		localStorage.setItem('slide69-1', 'true');

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-2', 'true')
		}

		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = ['slide69-2', 'slide69-3', 'slide69-4'];

		$('.modal1').css('display', 'block')
		$('.reproduc').hide()
		$('.reproduc').trigger('pause');

		localStorage.setItem('slide69-2', 'true')

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-2', 'true')
		}

		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = ['slide69-2', 'slide69-3', 'slide69-4'];

		$('.modal2').css('display', 'block')
		$('.reproduc').hide()
		$('.reproduc').trigger('pause');

		localStorage.setItem('slide69-3', 'true')

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-2', 'true')
		}

		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	$('.play-boton-10').on('click', () => {
		const selectors = ['slide69-1', 'slide69-2', 'slide69-3'];
		$('.play-boton-10').hide()
		
		localStorage.setItem('slide69-4', 'true')

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-2', 'true')
		}

		$('.boton-play').hide()
		$('.reproduc').show()
	})
})
