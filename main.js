function check() {
		var userInput = document.getElementById('search').value;
		if (userInput.length < 1) {
			alert('Text box is currently empty.');
		} else {
			alert(userInput);
		}
	};
	