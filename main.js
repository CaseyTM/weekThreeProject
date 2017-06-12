let calculator = false;
const resetBtn = document.getElementById("reset");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const divideBtn = document.getElementById("divide");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const multiplyBtn = document.getElementById("multiply");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const subtractBtn = document.getElementById("subtract");
const zeroBtn = document.getElementById("zero");
const decimalBtn = document.getElementById("decimal");
const equalsBtn = document.getElementById("equals");
const addBtn = document.getElementById("add");
const textDisplay = document.getElementById("text-display")
let btnList = document.querySelectorAll(".squares");

// const startBtn = document.getElementById("start");
// startBtn.addEventListener("click", function(e) {
// 	if(event.target.id == "start"){
// 		if(calculator === false){
// 			console.log("hello")
// 			calculator = true;
// 			console.log("message");
// 		}else{
// 			calculator = false;
// 			console.log("turned off")
// 		}
// 	}
// })

let display = [];
function renderText(array){
	let combo = "";
	
	for(let i = 0; i < array.length; i ++){
		combo += array[i];
		textDisplay.innerHTML = combo;
	}
}


for (let i = 0; i < btnList.length; i++) {
	
	// function for rendering everything currently in the display array






  let btn = btnList[i];

  btn.addEventListener("click", function(e) {
	if (event.target.id == "reset"){
		display = [];
		textDisplay.innerHTML = "0";
		renderText(display);
	}else if (event.target.id == "seven"){
		display.push("7");
		renderText(display)
	}
	else if (event.target.id == "eight"){
		display.push("8");
		renderText(display)
	}
	else if (event.target.id == "nine"){
		display.push("9");
		renderText(display)
	}
	else if (event.target.id == "divide"){
		display.push("/");
		renderText(display)
	}
	else if (event.target.id == "four"){
		display.push("4");
		renderText(display)
	}
	else if (event.target.id == "five"){
		display.push("5");
		renderText(display)
	}
	else if (event.target.id == "six"){
		display.push("6");
		renderText(display)
	}
	else if (event.target.id == "multiply"){
		display.push("x");
		renderText(display)
	}
	else if (event.target.id == "one"){
		display.push("1");
		renderText(display)
	}
	else if (event.target.id == "two"){
		display.push("2");
		renderText(display)
	}
	else if (event.target.id == "three"){
		display.push("3");
		renderText(display)
	}

	else if (event.target.id == "subtract"){
		display.push("-");
		renderText(display)
	}

	else if (event.target.id == "zero"){
		display.push("0");
		renderText(display)
	}
	else if (event.target.id == "decimal"){
		display.push(".");
		renderText(display)
	}
	else if (event.target.id == "equals"){
		display.push("=");
		renderText(display)
	}
	else if (event.target.id == "add"){
		display.push("+");
		renderText(display)
	}
  });
}

