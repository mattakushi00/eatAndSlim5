document.addEventListener("DOMContentLoaded", work);

function work() {
	animationSimple('h1, h2, h3, p', 'animation-fadeIn');
}

function hide(arr) {
	let elements = document.querySelectorAll(arr);
	for (let item of elements) {
		item.style.opacity = '0';
	}
}

function position(el) {
	/*определяем кооординаты элемента*/
	let elementBorderTop = window.pageYOffset + el.getBoundingClientRect().top,
		elementBorderBottom = window.pageYOffset + el.getBoundingClientRect().bottom,
		windowHeight = document.documentElement.clientHeight,
		windowBorderBottom = window.pageYOffset + windowHeight,
		pos = {
			element: el,
			elementBorderTop: elementBorderTop,
			elementBorderBottom: elementBorderBottom,
			windowHeight: windowHeight,
			windowBorderBottom: windowBorderBottom - 20
		};
	return pos;
}

function animationSimple(dom, animation) {
	hide(dom);
	getAnimation(dom, animation)

	window.addEventListener('scroll', function () {
		getAnimation(dom, animation)
	});
}

function getAnimation(element, animation) {
	const arr = document.querySelectorAll(element)
	for (let item of arr) {
		let pos = position(item);
		if (pos.windowBorderBottom > pos.elementBorderTop) {
			pos.element.classList.add(animation);
			pos.element.style.opacity = '1';
		}
	}
}