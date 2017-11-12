const tick = (id, slides) =>
	document.querySelector(id).src =
		slides[(slides.indexOf(document.querySelector(id).src) + 1) % slides.length]

setInterval(
	() => tick("#omegleImg", assets.omegle.imgs),
	3000
)
