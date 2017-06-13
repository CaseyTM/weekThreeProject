
const textDisplay = document.getElementById("text-display")
let btnList = document.querySelectorAll(".squares");
var clickSound = new Audio("thozi_daClick.mp3"); // buffers automatically when created
var easterEgg = new Audio("2020_bizarre.wav");
// initialize empty array, place inside a function so the array updates when new info is pushed. 

let display = [];
let operator = [];
let displayTwo = [];
function renderText(array){
	let combo = "";
	
	for(let i = 0; i < array.length; i ++){
		combo += array[i];
		textDisplay.innerHTML = combo;
	}
}


function makeWholeAgain(array1,operator,array2){
	let string1 = array1.join("");
	let operatorElement = operator[0]
	let string2 = array2.join("");
	if(array1 == 2 && array2 == 2){
		easterEgg.play();
		return "5318000+8";
	}else{
	return string1 + operatorElement + string2;
	}
	
}

for (let i = 0; i < btnList.length; i++) {
	let btn = btnList[i];
	

// check to make sure they clicked on a calculator button, if so play the sound.

  btn.addEventListener("click", function(e) {
  	if(event.target.tagName == "DIV"){
  		clickSound.play();
  		clickSound.currentTime=0;
  	}
	
		if (event.target.id == "reset"){
			display = [];
			displayTwo = [];
			operator = [];
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
			operator.push("/");
			displayTwo = display;
			display = [];
			renderText(operator);
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
			operator.push("*");
			displayTwo = display;
			display = [];
			textDisplay.innerHTML = "x";
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
			operator.push("-");
			displayTwo = display;
			display = [];
			renderText(operator);
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
			// evaluation goes here

			console.log("display one is"+ display,"operator is" +operator,"display two is" +displayTwo);
			let result = eval(makeWholeAgain(displayTwo,operator,display));
			textDisplay.innerHTML = result;

		}
		else if (event.target.id == "add"){
			operator.push("+");
			displayTwo = display;
			display = [];
			renderText(operator);
		}
	  });
	}

