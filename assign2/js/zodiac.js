// Name: Paul Diaz 
// Course: CIS114 OL 
// File Name: zodiac.js

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function findSign() {

    // Reference zodiac img name
    var zodiacsign;
    var zodiacimgpath;
    var modifiedYear;

    // Get a reference to the form elements:
	var birthmonth = document.getElementById('month');
	var birthyear = document.getElementById('birthyear');
	        
    // Get a reference to the zodiac image element
    var zodiacimg = document.getElementById('zodiacimg');
    var zodimgtag = document.getElementById('zodimgtag');
    var zodnametag = document.getElementById('zodiacname');
    
    // Check for valid data: 
	if (birthyear.value >= 1901) {
		
		// Subtract 1900 from actual year so that animals map correctly 
		modifiedYear = (birthyear.value - 1900);
	    
	    var yearModValue = modifiedYear % 12;
	    // If birthmonth is Jan then change sign to following year
        if (birthmonth.value == '01') {
    		yearModValue -= 1;
    	}
    	
    	// rollover all the way back to 11
    	if (yearModValue == -1) {
    		yearModValue = 11;
    	}
        
        // Determine the correct lunar animal:
        switch (yearModValue) {
            case 0:
                zodiacsign = 'rat';
                break;
            case 1:
                zodiacsign = 'ox';
                break;
            case 2:
                zodiacsign = 'tiger';
                break;
            case 3:
                zodiacsign = 'rabbit';
                break;
            case 4:
                zodiacsign = 'dragon';
                break;
            case 5:
                zodiacsign = 'snake';
                break;
            case 6:
                zodiacsign = 'horse';
                break;
            case 7:
                zodiacsign = 'goat';
                break;
            case 8:
                zodiacsign = 'monkey';
                break;
            case 9:
                zodiacsign = 'rooster';
                break;
            case 10:
                zodiacsign = 'dog';
                break;
            case 11:
                zodiacsign = 'boar';
                break;
            default:
            	zodiacsign = 'zodiac';
            	break;
        } // End of switch.
        
        
		if (zodnametag.textContent !== undefined) {
			zodnametag.innerText = (zodiacsign.charAt(0).toUpperCase() + zodiacsign.slice(1));
		}
		
		zodiacimgpath = 'images/' + zodiacsign + '.jpg';
		
		if (zodimgtag.src !== undefined) {
			zodimgtag.src = zodiacimgpath;
		}
		
    } else { // Show an error:
        document.getElementById('birthyear').value = 'Enter a year greater than 1900.';
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = findSign;
} // End of init() function.

window.onload = init;