let currentQuestion = 1
let responsesSelected = []

const validateInitQuestion = () => {
	const responses = questions.find(
		(_item, index) => index + 1 === currentQuestion
	)
	const { answers, classQuestions, question, positiona, positionb } =
		responses
	$('.question-image').attr('src', question)
	$('.pregunta').addClass(classQuestions)
	$('.pregunta').attr('style', 'z-index: 0;')

	if (answers.length === 2) {
		$('.opcion-a').css('top', positiona)
		$('.opcion-b').css('top', positionb)

		$('.opcion-c').hide()
		$('.opcion-d').hide()
	} else {
		$('.opcion-c').show()
		$('.opcion-d').show()
	}
}

const validateSelectedOption = (option) => {
	$('.pregunta').css('z-index', '1')
	const responses = questions.find(
		(_item, index) => index + 1 === currentQuestion
	)
	const { correctAnswer, classPart, errorPage, errorStyle } = responses

	if (correctAnswer === option) {
		responsesSelected.push(currentQuestion)
		$(`.opcion-${option}`).css('background', '#5AC52D')

		$(`.${classPart}`).show()
		var audio = new Audio('./js/sonido-lapiz.mp3')
		audio.play()
		setTimeout(() => {
			if (currentQuestion + 1 === 14) {
				localStorage.setItem(
					'total',
					JSON.stringify(responsesSelected.length)
				)
				localStorage.setItem(
					'responses',
					JSON.stringify(responsesSelected)
				)
				if (responsesSelected.length < 12)
					window.location.href = './index4.html'
				else window.location.href = './index3.html'
			} else {
				$('.pregunta').css('z-index', '0')
				$(`.opcion-a`).css('background', 'transparent')
				$(`.opcion-b`).css('background', 'transparent')
				$(`.opcion-c`).css('background', 'transparent')
				$(`.opcion-d`).css('background', 'transparent')
				currentQuestion++
				validateInitQuestion()
			}
		}, 2000)
	} else {
		$(`.opcion-${option}`).css('background', '#FF595E')

		setTimeout(() => {
			var audio = new Audio('./js/incorrecta.mp3')
			audio.play()
			if (currentQuestion + 1 === 14) {
				localStorage.setItem(
					'total',
					JSON.stringify(responsesSelected.length)
				)
				localStorage.setItem(
					'responses',
					JSON.stringify(responsesSelected)
				)
				if (responsesSelected.length < 12)
					window.location.href = './index4.html'
				else window.location.href = './index3.html'
			} else {
				$('.next').show()
				$(`.opcion-${option}`).css('background', 'transparent')
				if (errorPage) {
					$('.question-image').fadeOut(100, () => {
						$('.question-image').attr('src', errorPage)
					})
					setTimeout(() => {
						$('.pregunta').attr('style', errorStyle)
					}, 400)
					setTimeout(() => {
						$('.question-image').fadeIn(600, () => {})
					}, 600)
				} else {
					currentQuestion++
					validateInitQuestion()
				}
			}
		}, 1000)
	}
}

/** Logica de preguntas */
$(document).ready(() => {
	validateInitQuestion()

	$('.opcion-a').on('click', () => validateSelectedOption('a'))
	$('.opcion-b').on('click', () => validateSelectedOption('b'))
	$('.opcion-c').on('click', () => validateSelectedOption('c'))
	$('.opcion-d').on('click', () => validateSelectedOption('d'))
	$('.next').on('click', () => {
		$('.next').hide()
		currentQuestion++
		validateInitQuestion()
	})
})
