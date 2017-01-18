/*window.calculator = window.calculator || {};

(function() {
	var calculate = function() {
		var x = document.getElementById('x').value;
		var y = document.getElementById('y').value;
		document.getElementById('result').innerHTML = x + y;
	};

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();*/
'use strict';

window.calculator = window.calculator || {};

(function() {
	var getIntById = function(id) {
		return parseInt(document.getElementById(id).value, 10);
	};

	var calculate = function() {
		var sum = getIntById('x') + getIntById('y');
		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
	};

	window.calculator.init = function() {
		document.getElementById('add').addEventListener('click', calculate);
	};
})();
