let data1 = document.querySelector("#data1");
let data2 = document.querySelector("#data2");

let result = document.querySelector(".rating-result");

let newValue = undefined;

function storeValue(value) {
	newValue = undefined;
	newValue = value;
}

function performOperation() {
	if (newValue) {
		data1.style.display = "none";
		data2.style.display = "flex";
		result.innerHTML = newValue;
	}
}

let activeButton = null;

function changeColor(button) {
	if (activeButton) {
		activeButton.classList.remove("active");
	}

	button.classList.add("active");
	activeButton = button;
}
