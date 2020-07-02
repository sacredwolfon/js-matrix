function $(selector) {
	return document.querySelector(selector);
}
function $a(selector) {
	return document.querySelectorAll(selector);
}

let [x, y] = [20, 20];

for (let i = 0; i < x; i++) {
	for (let j = 0; j < y; j++) {
		let cell = document.createElement("button");
		[cell.style.width, cell.style.height, cell.style.left, cell.style.top, cell.innerText] = [
			$("#matrix").offsetWidth/x+"px",
			$("#matrix").offsetHeight/y+"px",
			i * (100/x) + "%",
			j * (100/y) + "%",
			parseInt(Math.random()*100%2),
		];
		$("#matrix").appendChild(cell);
	}
}

let cells = [];

setInterval(() => {
	for (let i = 0; i < cells.length; i++) $a("button")[cells[i]].style.color = "#00FF00";
	cells = [];
	for (let i = 0; i < 20; i++) {
		cells.push(parseInt(Math.random()*(x*y*100)%(x*y)));
		let cell = $a("button")[cells[i]].style.color = "purple";
	}
}, 100);