// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});

//Const
const input2 = document.getElementById("password");
const togglePass = document.getElementById("togglePassword");

//event listener
togglePass.addEventListener('click', function () { //toggle function
	const type = input2.getAttribute('type');

	input2.setAttribute(
		'type',

		//toggle between password and type
		type === 'password' ? 'text' : 'password'
	);

});
