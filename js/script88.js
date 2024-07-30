var htmlancho
var htmlalto
var bodyancho
var bodyalto
var id
// $(window).resize(function() {
//     clearTimeout(id);
//     id = setTimeout(CambioVentana(), 500);
// });

window.addEventListener('resize', (e) => {
	if (e.target.outerWidth > 768) {
		document.querySelector('.content').classList.remove('ancho')
		document.querySelector('.content').classList.add('alto')
	} else {
		document.querySelector('.content').classList.remove('alto')
		document.querySelector('.content').classList.add('ancho')
	}
})

function CambioVentana() {
	htmlancho = $('html').width()
	htmlalto = $('html').height()
	bodyancho = $('body').width()
	bodyalto = $('body').height()
	if ($('body').hasClass('alto') && bodyancho > htmlancho) {
		$('body').removeClass('alto').addClass('ancho')
	}
	if ($('body').hasClass('ancho') && bodyalto > htmlalto) {
		$('body').removeClass('ancho').addClass('alto')
	}
}
let bandera = false

$(document).ready(function () {
	let bandera = false
	$('#abrir1').on('click', function () {
		console.log('hol')

		if (bandera) {
			$('.fondo-hove').css('display', 'none')
			bandera = !bandera
		} else {
			$('.fondo-hove').css('display', 'block')
			bandera = !bandera
		}
	})

	let bandera1 = false
	$('#abrir2').on('click', function () {
		console.log('hol')

		if (bandera1) {
			$('.fondo-hove2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.fondo-hove2').css('display', 'block')
			bandera1 = !bandera1
		}
	})

	let bandera2 = false
	$('#abrir3').on('click', function () {
		console.log('hol')

		if (bandera2) {
			$('.fondo-hove3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.fondo-hove3').css('display', 'block')
			bandera2 = !bandera2
		}
	})

	let bandera3 = false
	$('#abrir4').on('click', function () {
		console.log('hol')

		if (bandera3) {
			$('.fondo-hove4').css('display', 'none')
			bandera3 = !bandera3
		} else {
			$('.fondo-hove4').css('display', 'block')
			bandera3 = !bandera3
		}
	})

	let bandera4 = false
	$('#abrir5').on('click', function () {
		console.log('hol')

		if (bandera4) {
			$('.fondo-hove5').css('display', 'none')
			bandera4 = !bandera4
		} else {
			$('.fondo-hove5').css('display', 'block')
			bandera4 = !bandera4
		}
	})

	let bandera5 = false
	$('#abrir6').on('click', function () {
		console.log('hol')

		if (bandera5) {
			$('.fondo-hove6').css('display', 'none')
			bandera5 = !bandera5
		} else {
			$('.fondo-hove6').css('display', 'block')
			bandera5 = !bandera5
		}
	})


	let bandera6 = false
	$('#abrir7').on('click', function () {
		console.log('hol')

		if (bandera6) {
			$('.fondo-hove7').css('display', 'none')
			bandera6 = !bandera6
		} else {
			$('.fondo-hove7').css('display', 'block')
			bandera6 = !bandera6
		}
	})

	if (window.innerWidth > 768) {
		document.querySelector('.content').classList.add('alto')
	} else {
		document.querySelector('.content').classList.add('ancho')
	}

	$('.protecion1').click(function () {
		if (bandera) {
			$('.title1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.title1').css('display', 'block')
			bandera = !bandera
		}
	})

	var slide = 0
	var botonActivo = ''

	// htmlancho = $('html').width();
	// htmlalto = $('html').height();
	// bodyancho = $('body').width();
	// bodyalto = $('body').height();
	// if ($('body').hasClass('alto') && bodyancho > htmlancho) {
	//     $('body').removeClass('alto').addClass('ancho');
	// }
	// if ($('body').hasClass('ancho') && bodyalto > htmlalto) {
	//     $('body').removeClass('ancho').addClass('alto');
	// }
})

$(document).ready(function () {
	$('.menu').hide()

	$('.abrirmenu').click(function () {
		$('.menu').show()
		$('.menu').removeClass('animated fadeOut')
		$('.menu').addClass('animated fadeIn')
		setTimeout(function () {
			$('.abrirmenu').hide()
		}, 0.5)
	})
	$('.cerrarmenu').click(function () {
		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})
	$('.ref').click(function () {
		$('.popup').show()
	})
	$('.cerrar').click(function () {
		$('.popup').hide()
	})

	$('.container_cinco,.container_seis').hide()
	$('.container_siete,.container_ocho,.container_nine,.container_diez').hide()

	$('.siguiente').click(function () {
		$('.container_dos').show()
		$('.contenedor').hide()
	})

	$('.volver_dos').click(function () {
		$('.container_dos').hide()
		$('.contenedor').show()
	})

	$('.siguiente_dos').click(function () {
		$('.container_dos').hide()
		$('.container_tres').show()
	})

	$('.volver_tres').click(function () {
		$('.container_dos').show()
		$('.container_tres').hide()
	})

	$('.siguiente_tres').click(function () {
		$('.container_tres').hide()
		$('.container_cuatro').show()
	})

	//modal
	$('.close').click(function () {
		$('.container_tres').show()
		$('.container_modal').hide()
	})

	$('.cuadro').click(function () {
		$('.container_tres').hide()
		$('.container_modal').show()
	})

	//modal
	$('.close1').click(function () {
		$('.container_seis').show()
		$('.container_modal1').hide()
	})

	$('.cuadro1').click(function () {
		$('.container_seis').hide()
		$('.container_modal1').show()
	})

	//modal
	$('.close2').click(function () {
		$('.container_seis').show()
		$('.container_modal2').hide()
	})

	$('.cuadro2').click(function () {
		$('.container_seis').hide()
		$('.container_modal2').show()
	})

	$('.volver_cuatro').click(function () {
		$('.container_tres').show()
		$('.container_cuatro').hide()
	})

	$('.siguiente_cuatro').click(function () {
		$('.container_cuatro').hide()
		$('.contenedor').show()
	})

	// $('.volver_cinco').click(function(){
	//     $('.container_cuatro').show();
	//     $('.container_cinco').hide();
	// });

	// $('.siguiente_cinco').click(function(){
	//     $('.container_cinco').hide();
	//     $('.container_seis').show();
	// });

	// $('.volver_seis').click(function(){
	//     $('.container_cinco').show();
	//     $('.container_seis').hide();
	// });

	// $('.siguiente_seis').click(function(){
	//     $('.container_seis').hide();
	//     $('.contenedor').show();
	// });

	// $('.volver_siete').click(function(){
	//     $('.contenedor').show();
	// });

	$('.siguiente_siete').click(function () {
		$('.container_siete').hide()
		$('.container_ocho').show()
	})

	$('.volver_ocho').click(function () {
		$('.container_siete').show()
		$('.container_ocho').hide()
	})

	$('.siguiente_ocho').click(function () {
		$('.container_ocho').hide()
		$('.container_nine').show()
	})

	$('.volver_nine').click(function () {
		$('.container_ocho').show()
		$('.container_nine').hide()
	})

	$('.siguiente_nine').click(function () {
		$('.container_nine').hide()
		$('.container_diez').show()
	})

	$('.volver_diez').click(function () {
		$('.container_nine').show()
		$('.container_diez').hide()
	})

	// de 11 en adelante

	$(
		'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
	).hide()

	$(
		'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
	).hide()

	$('.siguiente_diez').click(function () {
		$('.container_diez').hide()
		$('.contenedor').show()
	})

	// $('.siguiente_once').click(function(){
	//     $('.container_once').hide();
	//     $('.container_doce').show();
	// });

	// $('.volver_doce').click(function(){
	//     $('.container_once').show();
	//     $('.container_doce').hide();
	// });

	// $('.siguiente_doce').click(function(){
	//     $('.container_doce').hide();
	//     $('.container_trece').show();
	// });

	// $('.volver_trece').click(function(){
	//     $('.container_doce').show();
	//     $('.container_trece').hide();
	// });

	// $('.siguiente_trece').click(function(){
	//     $('.container_trece').hide();
	//     $('.container_katorce').show();
	// });

	// $('.volver_katorce').click(function(){
	//     $('.container_trece').show();
	//     $('.container_katorce').hide();
	// });

	// $('.siguiente_katorce').click(function(){
	//     $('.container_katorce').hide();
	//     $('.container_quince').show();
	// });

	// $('.volver_quince').click(function(){
	//     $('.container_quince').hide();
	//     $('.container_katorce').show();
	// });

	// $('.siguiente_quince').click(function(){
	//     $('.container_quince').hide();
	//     $('.container_diecices').show();
	// });

	// $('.volver_diecices').click(function(){
	//     $('.container_quince').show();
	//     $('.container_diecices').hide();
	// });

	// $('.siguiente_diecices').click(function(){
	//     $('.container_diesiciete').show();
	//     $('.container_diecices').hide();
	// });

	// $('.volver_diesiciete').click(function(){
	//     $('.container_diecices').show();
	//     $('.container_diesiciete').hide();
	// });

	// $('.siguiente_diesiciete').click(function(){
	//     $('.container_diesiocho').show();
	//     $('.container_diesiciete').hide();
	// });

	// $('.volver_diesiocho').click(function(){
	//     $('.container_diesiciete').show()
	//     $('.container_diesiocho').hide();
	// });

	// $('.siguiente_diesiocho').click(function(){
	//     $('.contenedor').show();
	//     $('.container_diesiocho').hide();
	// });

	// $('.volver_diesinueve').click(function(){
	//     $('.container_diesinueve').hide();
	//     $('.container_diesiocho').show();
	// });

	// $('.siguiente_diesinueve').click(function(){
	//     $('.container_diesinueve').hide();
	//     $('.container_veinte').show();
	// });

	// $('.volver_veinte').click(function(){
	//     $('.container_diesinueve').show();
	//     $('.container_veinte').hide();
	// });

	// $('.siguiente_veinte').click(function(){
	//     $('.container_veinte_one').show();
	//     $('.container_veinte').hide();
	// });

	// $('.volver_veinte_one').click(function(){
	//     $('.container_veinte').show();
	//     $('.container_veinte_one').hide();
	// });

	$(
		'.container_veinte_two,.container_veinte_three,.container_veinte_four'
	).hide()

	$('.siguiente_veinte_one').click(function () {
		$('.container_veinte_one').hide()
		$('.container_veinte_two').show()
	})

	$('.volver_veinte_two').click(function () {
		$('.container_veinte_two').hide()
		$('.container_veinte_one').show()
	})

	$('.siguiente_veinte_two').click(function () {
		$('.container_veinte_three').show()
		$('.container_veinte_two').hide()
	})

	$('.volver_veinte_three').click(function () {
		$('.container_veinte_two').show()
		$('.container_veinte_three').hide()
	})

	$('.siguiente_veinte_three').click(function () {
		$('.container_veinte_four').show()
		$('.container_veinte_three').hide()
	})

	$('.volver_veinte_four').click(function () {
		$('.container_veinte_three').show()
		$('.container_veinte_four').hide()
	})

	// popups

	$('.popup_one,.popup_two').hide()
	$('.popup_tres,.popup_cuatro,.popup_cinco,.popup_seis,.popup_siete').hide()
	$('.popup_siete_dos').hide()

	$('.abrir_one').click(function () {
		$('.popup_one').show()
	})
	$('.abrir_two').click(function () {
		$('.popup_two').show()
	})
	$('.cerrar_one').click(function () {
		$('.popup_one').hide()
	})
	$('.cerrar_two').click(function () {
		$('.popup_two').hide()
	})

	$('.abrir_tres').click(function () {
		$('.popup_tres').show()
	})
	$('.cerrar_tres').click(function () {
		$('.popup_tres').hide()
	})

	$('.abrir_cuatro').click(function () {
		$('.popup_cuatro').show()
	})
	$('.cerrar_cuatro').click(function () {
		$('.popup_cuatro').hide()
	})

	$('.abrir_cinco').click(function () {
		$('.popup_cinco').show()
	})
	$('.cerrar_cinco').click(function () {
		$('.popup_cinco').hide()
	})

	$('.abrir_seis').click(function () {
		$('.popup_seis').show()
	})
	$('.cerrar_seis').click(function () {
		$('.popup_seis').hide()
	})

	$('.abrir_siete').click(function () {
		$('.popup_siete').show()
	})
	$('.cerrar_siete').click(function () {
		$('.popup_siete').hide()
	})
	$('.cerrar_siete_dos').click(function () {
		$('.popup_siete').hide()
	})

	$('.abrir_siete_dos').click(function () {
		$('.popup_siete_dos').show()
	})
	$('.cerrar_siete_dos').click(function () {
		$('.popup_siete_dos').hide()
	})

	// navegacion

	$('.perfiles').click(function () {
		$('.title1').css('display', 'none')
		bandera = false

		$('.contenedor').hide()
		$('.container_dos').show()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	$('.contol').click(function () {
		$('.title1').css('display', 'none')
		bandera = false

		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').show()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	$('.fallo').click(function () {
		$('.title1').css('display', 'none')
		bandera = false
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').show()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	$('.glucemo').click(function () {
		$('.title1').css('display', 'none')
		bandera = false
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').show()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	$('.insulina').click(function () {
		$('.title1').css('display', 'none')
		bandera = false
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').show()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	$('.adultos').click(function () {
		$('.title1').css('display', 'none')
		bandera = false
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').show()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})
	// EFI

	$('.efi').click(function () {
		$('.contenedor').show()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// EFI

	// evidencia
	$('.evidencia').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').show()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})
	// evidencia

	// proteccion
	// $('.protecion').click(function(){
	//     $('.contenedor').hide();
	//     $('.container_dos').hide();
	//     $('.container_one').hide();
	//     $('.container_tres').hide();
	//     $('.container_cuatro').hide();
	//     $('.container_cinco').hide();
	//     $('.container_seis').hide();
	//     $('.container_tres').show();
	//     $('.container_ocho').hide();
	//     $('.container_nine').hide();
	//     $('.container_diez').hide();
	//     $('.container_siete').hide();
	//     $('.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho').hide();

	// $('.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one').hide();
	// $('.container_veinte_two,.container_veinte_three,.container_veinte_four').hide();

	//         $('.abrirmenu').show();
	//         $('.menu').removeClass('animated fadeIn');
	//         $('.menu').addClass('animated fadeOut');
	//         setTimeout(function() {
	//             $('.menu').hide();
	//         }, .5);

	// });

	// proteccion

	// terapia
	$('.terapia').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').show()
		$('.container_cuatro').hide()
		$('.container_diez').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// terapia

	// triple
	$('.triple').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').show()
		$('.container_cinco').hide()
		$(
			'.container_once,.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// triple

	// seguridad
	$('.seguridad').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').show()
		$(
			'.container_doce,.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// seguridad

	// conclusiones
	$('.conclusion').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_Doce').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').show()
		$('.container_once').hide()
		$('.container_seis').hide()
		$(
			'.container_trece,.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// conclusiones

	// presentaciones
	$('.presenta').click(function () {
		$('.contenedor').hide()
		$('.container_dos').show()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_trece').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_siete').hide()
		$(
			'.container_katorce,.container_quince,.container_diecices,.container_diesiocho'
		).hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// presentaciones

	// EMPIEZA LAS PRESENTACIONES
	// diovan_15
	$('.slide15').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').show()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$(
			'.container_diesiciete,.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// diovan_15

	// diovan_17
	$('.slide17').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').show()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').hide()
		$('.container_diesiciete').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$(
			'.container_diesinueve,.container_veinte,.container_veinte_one'
		).hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// diovan_17

	// diovan_19
	$('.slide19').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').show()
		$('.container_quince').hide()
		$('.container_diesiciete').hide()
		$('.container_diesinueve').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$('.container_veinte,.container_veinte_one').hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// diovan_19

	// diovan_21
	$('.slide21').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').show()
		$('.container_diesiciete').hide()
		$('.container_diesinueve').hide()
		$('.container_veinte_one').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$('.container_veinte').hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// diovan_21

	// BOTONES DE INICIO

	// home
	$('.home').click(function () {
		$('.contenedor').show()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').hide()
		$('.container_diesiciete').hide()
		$('.container_diesinueve').hide()
		$('.container_veinte_one').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$('.container_veinte').hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// home

	// bss
	$('.bss').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').hide()
		$('.container_nine').show()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').hide()
		$('.container_diesiciete').hide()
		$('.container_diesinueve').hide()
		$('.container_veinte_one').hide()
		$('.container_katorce,.container_diecices,.container_diesiocho').hide()

		$('.container_veinte').hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// bss

	// ref
	$('.ref').click(function () {
		$('.contenedor').hide()
		$('.container_dos').hide()
		$('.container_one').hide()
		$('.container_tres').hide()
		$('.container_cuatro').hide()
		$('.container_cinco').hide()
		$('.container_seis').hide()
		$('.container_siete').hide()
		$('.container_ocho').show()
		$('.container_nine').hide()
		$('.container_diez').hide()
		$('.container_once').hide()
		$('.container_doce').hide()
		$('.container_trece').hide()
		$('.container_quince').hide()
		$('.container_diesiciete').hide()
		$('.container_diesinueve').hide()
		$('.container_veinte_one').hide()
		$('.container_katorce').hide()
		$('.container_diecices,.container_diesiocho').hide()

		$('.container_veinte').hide()
		$(
			'.container_veinte_two,.container_veinte_three,.container_veinte_four'
		).hide()

		$('.abrirmenu').show()
		$('.menu').removeClass('animated fadeIn')
		$('.menu').addClass('animated fadeOut')
		setTimeout(function () {
			$('.menu').hide()
		}, 0.5)
	})

	// ref
})
