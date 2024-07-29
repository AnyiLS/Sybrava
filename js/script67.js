$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		$('.reproduc').hide()
		$('.reproduc').trigger('pause')
		localStorage.setItem('slide67-2', 'true')
		if (
			localStorage.getItem('slide67-1') === 'true' &&
			localStorage.getItem('slide67-3') === 'true'
		) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

	// modal 2
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
		localStorage.setItem('slide67-1', 'true')
		if (
			localStorage.getItem('slide67-2') === 'true' &&
			localStorage.getItem('slide67-1') === 'true'
		) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor2').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
	})

	// modal 3
	$('.openModal2').on('click', () => {
		$('.modal2').css('display', 'block')
		localStorage.setItem('slide67-3', 'true')
		if (
			localStorage.getItem('slide67-2') === 'true' &&
			localStorage.getItem('slide67-1') === 'true'
		) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		$('.modal2').css('display', 'none')
	})
})
