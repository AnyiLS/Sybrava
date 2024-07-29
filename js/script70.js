$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		const selectors = ['slide70-2', 'slide70-3'];

		$('.modal').css('display', 'block')

		localStorage.setItem('slide70-1', 'true')
		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-3', 'true')
		}

		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		const selectors = ['slide70-1', 'slide70-3'];

		$('.modal1').css('display', 'block')

		localStorage.setItem('slide70-2', 'true')

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-3', 'true')
		}
		
		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		const selectors = ['slide70-1', 'slide70-2'];

		$('.modal2').css('display', 'block')

		localStorage.setItem('slide70-3', 'true')

		if (selectors.every((slide) => localStorage.getItem(slide) === 'true')) {
			$('.boton-next').show()
			$('.vutom-col').hide()
			localStorage.setItem('slide67-3', 'true')
		}
		
		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})

	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		localStorage.setItem('slide70-1', 'true')
		if (localStorage.getItem('slide70-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
		$('.reproduc').show()
	})
})
