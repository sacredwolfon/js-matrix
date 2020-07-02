function $(selector) {
	return document.querySelector(selector);
}
function $a(selector) {
	return document.querySelectorAll(selector);
}

let symbols = "0123456789ABCDEF".split("");

function color() {
	let color = "#";
	for (let _ = 0; _ < 6; _++) {
		color += symbols[parseInt(Math.random()*100%symbols.length)];
	}
	return color;
}

let [x, y] = [20, 20];

for (let i = 0; i < x; i++) {
	for (let j = 0; j < y; j++) {
		let cell = document.createElement("button");
		[cell.style.width, cell.style.height, cell.style.left, cell.style.top, cell.innerText, cell.style.backgroundColor, cell.style.color] = [
			$("#matrix").offsetWidth/x+"px",
			$("#matrix").offsetHeight/y+"px",
			i * (100/x) + "%",
			j * (100/y) + "%",
			parseInt(Math.random()*100%2),
			color(),
			color()
		];
		$("#matrix").appendChild(cell);
	}
}

setInterval(() => {
	for (let i = 0; i < 10; i++) {
		let cell = $a("button")[parseInt(Math.random()*(x*y*100)%(x*y))];
		[cell.style.backgroundColor, cell.style.color] = [color(), color()];
	}
}, 100);