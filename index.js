/** @format */

const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const button = document.querySelector("button");

function hexCode() {
	let result = "#";
	let result2 = "#";
	let hexNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

	for (let i = 0; i < 6; i++) {
		let chosenColor = hexNumber[Math.floor(Math.random() * hexNumber.length)];
		result += chosenColor;
	}
	for (let i = 0; i < 6; i++) {
		let chosenColor2 = hexNumber[Math.floor(Math.random() * hexNumber.length)];
		result2 += chosenColor2;
		console.log(chosenColor2);
	}
	body.style.background = `linear-gradient(to right, ${result},${result2})`;
	h1.textContent = `HEX COLOR: ${result}, ${result2}`;

	button.addEventListener("click", hexCode);
}
hexCode();
