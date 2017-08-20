// Name: Paul Diaz 
// Course: CIS114 OL 
// File Name: box.js
// Chapter: 4 
// Assignment: 1 

function calculate(){
	'use strict';
	var volume;
	var length = document.getElementById('length').value;
	var height = document.getElementById('height').value;
	var width = document.getElementById('width').value;
	
	volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
	volume = volume.toFixed(4);
	
	document.getElementById('volume').value = volume;
	return false;
}

function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;