
// change the background color of the button when it is active click
let buttons = document.querySelectorAll('.btn');
for (let i = 0;  i < buttons.length;  i++) {
	
	buttons[i].addEventListener('mousedown', function () {
		this.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
	});

	buttons[i].addEventListener('mouseup', function () {
		this.style.backgroundColor = '';
	});
}


// change the background color of the button when a specified key is pressed on keyboard
var operators = ['1', '2', '3', '4', '5', '6', '7', '8', '9' , '0'];
operators += ['+', '-', '*', '/', 'x', 'c', 'h', '.', '='];

document.addEventListener('keydown', function () {
	let key = event.key;

	if (operators.includes(key)) {
		document.querySelector('.key-' + CSS.escape(key)).style.backgroundColor = 'rgba(255,255,255, 0.4)';
	}
});

document.addEventListener('keyup', function () {
	let key = event.key;

	if (operators.includes(key)) {
		document.querySelector('.key-' + CSS.escape(key)).style.backgroundColor = '';
	}
});


// The input field should always be focused
const input = document.getElementById('user_input');

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    input.focus();
  });
});


// delete button functionality
let del = document.querySelector('.key-x');
del.addEventListener('click', function () {
	let user_input = document.getElementById('user_input');
	let input_value = user_input.value;
	user_input.value = input_value.slice(0, -1);
});


// replace ÷ to / and × *  from the user input 
let equalBtn = document.querySelector('.equal-key');
console.log(equalBtn);
equalBtn.addEventListener('click', function () {
	let user_input = document.getElementById('user_input');
	// console.log(user_input)
	let input_value = user_input.value;
	input_value = input_value.replace(/÷/g,'/').replace(/×/g, '*');
	user_input.value = eval(input_value);
});


