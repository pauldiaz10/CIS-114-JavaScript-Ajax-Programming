// Paul Diaz
// CIS II4 
// File name: words.js

// Shortcut function:
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.

// Function for setting text of an element:
function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // End of main IF.    
} // End of setText() function.

// This function sorts a list of words.
// The function takes one argument, a string.
function sortWords(max) {
    'use strict';

    // Get the words:
    var words = $('words').value.toLowerCase();
    
    // Convert the string to an array:
    words = words.split(' ');
    
    // Check if map exists
    if(words.map) {
    		console.log(words);
    		// Sort the words:
    		var sorted = words.map(function(value) {
        		return value;
    		}).sort();
    		console.log(sorted);
 		} else {
 				var sorted = words.sort().toLowerCase();		
 		} 
    // Send the output to the page:
    setText('output', sorted.join(', '));
        
    // Return false to prevent submission:
    return false;

} // End of sortWords() function.

function init() {
    'use strict';
    $('theForm').onsubmit = sortWords;
} // End of init() function.
window.onload = init;