
// Name: Paul Diaz 
// Course: CIS114 OL 
// File Name: calculate.js
// Chapter: 4 
// Assignment: 1 

function calculate(){
	'use strict';
	
	var futureValue;
	var initialInvestment = document.getElementById('initialInvestment').value;
	var interestRate = document.getElementById('interestRate').value;
	var investmentYears = document.getElementById('investmentYears').value;
	
	interestRate /= 100;
	interestRate++;
	
	futureValue = Math.pow(interestRate, investmentYears);
	
	futureValue = parseFloat(initialInvestment) * parseFloat(futureValue);
	futureValue = futureValue.toFixed(2);
	
	document.getElementById('futureValue').value = futureValue;
	return false;
}

function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;