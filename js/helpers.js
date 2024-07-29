const handleSlide = (array) => {
	array.forEach((slide) => {
		const value = localStorage.getItem(slide.name)

		if (value && value === 'true') $(slide.selector).hide()
		else localStorage.setItem(slide.name, 'false')
	})
}

const handleValidateCriterias = (array) => {
	if (array.every((slide) => localStorage.getItem(slide.name) === 'true')) {
		array.forEach((slide) => $(slide.selector).hide())
		$('.vutom-col').hide()
	}
}
