/** @format */
const btn = document.querySelector("#btn");
const body = document.querySelector("body");

function colorsChange() {
	const colors = [
		"#ef5777",
		"#575fcf",
		"#4bcffa",
		"#34e7e4",
		"#0be881",
		"#f53b57",
		"#3c40c6",
		"#0fbcf9",
		"#00d8d6",
		"#05c46b",
		"#ffc048",
		"#ffdd59",
		"#ff5e57",
		"#d2dae2",
		"#485460",
		"#ffa801",
		"#ffd32a",
		"#ff3f34",
	];
	const colors2 = [
		"#575fcf",
		"#4bcffa",
		"#34e7e4",
		"#0be881",
		"#f53b57",
		"#3c40c6",
		"#0fbcf9",
		"#00d8d6",
		"#05c46b",
		"#ffc048",
		"#ffdd59",
		"#ff5e57",
		"#d2dae2",
		"#485460",
		"#ffa801",
		"#ffd32a",
		"#ff3f34",
		"#ef5777",
	];

	const chosenColor = colors[Math.floor(Math.random() * colors.length)];
	const chosenColor2 = colors2[Math.floor(Math.random() * colors2.length)];

	body.style.background = `linear-gradient(to right, ${chosenColor},${chosenColor2})`;
	btn.addEventListener("click", colorsChange);
}

colorsChange();
