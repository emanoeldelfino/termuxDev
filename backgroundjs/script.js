const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomElem(arr) {
    	return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomElems(arr, num=1) {
	if (num > 1) {
		let elems = [];
		for (i=0; i <= num; i++) {
			elems.push(getRandomElem(arr));
		}
		return elems;
		
	} else if (num == 1) {
		return getRandomElem(arr);
	} else {
		return null;
	}
}

function getRandomHexColor(n) {
	for (c=0; c < n; c++) {
		let colorCode = '#';
		colorCode += getRandomElems(hexChars, num=6).join('');
		console.log(colorCode);
	}
}

setInterval(function() { repeat() }, 500);
function repeat() {
	let color = getRandomHexColor(1);
	console.log(`Current color ${color}`);
	document.body.style.background = color;
}

