function ocultar(index) {
	for (let i = 0; i < 32; i++) {
		if (i + 1 != index) {
			$(`#map-${i + 1}`).css('display', 'none')
		}
	}
}

const abrirModal = (selector) => $(selector).show();

const cerrarModal = (selector) => $(selector).hide();

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

	let bandera = false
	$('#abrir1').on('click', function () {
		localStorage.setItem('slide17-1', 'true')
		if (localStorage.getItem('slide17-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		if (bandera) {
			$('.menu1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			bandera = !bandera
		}
	})


	
	for (let i = 0; i < 32; i++) {
		$(`#map-${i + 1}`).hide()
	}
	
	$('#mapa-1').on('click', () => { $('#map-10').css('display', 'block'); ocultar(10) })
	$('#map-10').on('click', () => { $('#map-10').css('display', 'none') })

	$('#mapa-2').on('click', () => { $('#map-11').css('display', 'block'); ocultar(11) })
	$('#map-11').on('click', () => { $('#map-11').css('display', 'none') })

	$('#mapa-3').on('click', () => { $('#map-19').css('display', 'block'); ocultar(19) })
	$('#map-19').on('click', () => { $('#map-19').css('display', 'none') })

	$('#mapa-4').on('click', () => { $('#map-2').css('display', 'block'); ocultar(2) })
	$('#map-2').on('click', () => { $('#map-2').css('display', 'none') })

	$('#mapa-5').on('click', () => { $('#map-8').css('display', 'block'); ocultar(8) })
	$('#map-8').on('click', () => { $('#map-8').css('display', 'none') })

	$('#mapa-6').on('click', () => { $('#map-18').css('display', 'block'); ocultar(18) })
	$('#map-18').on('click', () => { $('#map-18').css('display', 'none') })

	$('#mapa-7').on('click', () => { $('#map-3').css('display', 'block'); ocultar(3) })
	$('#map-3').on('click', () => { $('#map-3').css('display', 'none') })

	$('#mapa-8').on('click', () => { $('#map-6').css('display', 'block'); ocultar(6) })
	$('#map-6').on('click', () => { $('#map-6').css('display', 'none') })

	$('#mapa-9').on('click', () => { $('#map-27').css('display', 'block'); ocultar(27) })
	$('#map-27').on('click', () => { $('#map-27').css('display', 'none') })

	$('#mapa-10').on('click', () => { $('#map-9').css('display', 'block'); ocultar(9) })
	$('#map-9').on('click', () => { $('#map-9').css('display', 'none') })

	$('#mapa-10').on('click', () => { $('#map-9').css('display', 'block'); ocultar(9) })
	$('#map-9').on('click', () => { $('#map-9').css('display', 'none') })

	$('#mapa-11').on('click', () => { $('#map-28').css('display', 'block'); ocultar(28) })
	$('#map-28').on('click', () => { $('#map-28').css('display', 'none') })

	$('#mapa-12').on('click', () => { $('#map-29').css('display', 'block'); ocultar(29) })
	$('#map-29').on('click', () => { $('#map-29').css('display', 'none') })

	$('#mapa-13').on('click', () => { $('#map-4').css('display', 'block'); ocultar(4) })
	$('#map-4').on('click', () => { $('#map-4').css('display', 'none') })

	$('#mapa-15').on('click', () => { $('#map-12').css('display', 'block'); ocultar(12) })
	$('#map-12').on('click', () => { $('#map-12').css('display', 'none') })

	$('#mapa-16').on('click', () => { $('#map-31').css('display', 'block'); ocultar(31) })
	$('#map-31').on('click', () => { $('#map-31').css('display', 'none') })

	$('#mapa-17').on('click', () => { $('#map-17').css('display', 'block'); ocultar(17) })
	$('#map-17').on('click', () => { $('#map-17').css('display', 'none') })

	$('#mapa-18').on('click', () => { $('#map-5').css('display', 'block'); ocultar(5) })
	$('#map-5').on('click', () => { $('#map-5').css('display', 'none') })

	$('#mapa-19').on('click', () => { $('#map-26').css('display', 'block'); ocultar(26) })
	$('#map-26').on('click', () => { $('#map-26').css('display', 'none') })

	$('#mapa-20').on('click', () => { $('#map-25').css('display', 'block'); ocultar(25) })
	$('#map-25').on('click', () => { $('#map-25').css('display', 'none') })

	$('#mapa-21').on('click', () => { $('#map-21').css('display', 'block'); ocultar(21) })
	$('#map-21').on('click', () => { $('#map-21').css('display', 'none') })

	$('#mapa-22').on('click', () => { $('#map-20').css('display', 'block'); ocultar(20) })
	$('#map-20').on('click', () => { $('#map-20').css('display', 'none') })

	$('#mapa-27').on('click', () => { $('#map-30').css('display', 'block'); ocultar(30) })
	$('#map-30').on('click', () => { $('#map-30').css('display', 'none') })

	$('#mapa-39').on('click', () => { $('#map-22').css('display', 'block'); ocultar(22) })
	$('#map-22').on('click', () => { $('#map-22').css('display', 'none') })

	$('#mapa-29').on('click', () => { $('#map-15').css('display', 'block'); ocultar(15) })
	$('#map-15').on('click', () => { $('#map-15').css('display', 'none') })

	$('#mapa-30').on('click', () => { $('#map-23').css('display', 'block'); ocultar(23) })
	$('#map-23').on('click', () => { $('#map-23').css('display', 'none') })

	$('#mapa-31').on('click', () => { $('#map-32').css('display', 'block'); ocultar(32) })
	$('#map-32').on('click', () => { $('#map-32').css('display', 'none') })

	$('#mapa-32').on('click', () => { $('#map-13').css('display', 'block'); ocultar(13) })
	$('#map-13').on('click', () => { $('#map-13').css('display', 'none') })

	$('#mapa-33').on('click', () => { $('#map-16').css('display', 'block'); ocultar(16) })
	$('#map-16').on('click', () => { $('#map-16').css('display', 'none') })

	$('#mapa-34').on('click', () => { $('#map-14').css('display', 'block'); ocultar(14) })
	$('#map-14').on('click', () => { $('#map-14').css('display', 'none') })

	$('#mapa-35').on('click', () => { $('#map-1').css('display', 'block'); ocultar(1) })
	$('#map-1').on('click', () => { $('#map-1').css('display', 'none') })

	$('#mapa-36').on('click', () => { $('#map-7').css('display', 'block'); ocultar(7) })
	$('#map-7').on('click', () => { $('#map-7').css('display', 'none') })

	$('#mapa-37').on('click', () => { $('#map-24').css('display', 'block'); ocultar(24) })
	$('#map-24').on('click', () => { $('#map-24').css('display', 'none') })
})
