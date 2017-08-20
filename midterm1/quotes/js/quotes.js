// Name: Paul Diaz  
// Course: CIS114 OL 
// File Name: quotes.js

var quotes = [
    	"I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth."    
]

// Function adds a quote to the global array.
  function addQuote() {
      'use strict';
      var quote = document.getElementById('quote');
      var output = document.getElementById('output');

      if (quote.value) {
          quotes.push(quote.value);
          updateQuotesPage(quotes);        
      } // End of quote.value IF.
			
			quote.value = '';
			
    // Return false to prevent submission:
    return false;
} // End of addQuote() function.

// function for deleting quotes
function deleteQuote() {
		var quoteNumberPos = prompt('What quote would you like to delete?');
		quoteNumberPos -= 1;
		console.log(quoteNumberPos);
		if (quotes[quoteNumberPos]){
				quotes.splice(quoteNumberPos, 1);
				console.log(quotes);
				updateQuotesPage(quotes);
		}
} // End of deleteQuote() function.

//Function for modifying an existing quote
function modifyQuote() {
		'use strict';
    var quoteNumberPos = prompt("Which quote (number) would you like to modify?");
    if (quoteNumberPos) {
		    quoteNumberPos -= 1;
		    if (quotes[quoteNumberPos]){
		    		var newModQuote = prompt("Please modify the quote:", quotes[quoteNumberPos]);
		    		if (newModQuote) {
		    				quotes[quoteNumberPos] = newModQuote;
		    		}
		        updateQuotesPage(quotes);
		    }
    }
} // End of modifyQuote() function.

// function to update page with quote array
function updateQuotesPage(quotes) {
		output.innerHTML = '';
		message = '<h2>Quotes</h2><ol>';
    for (var i = 0, count = quotes.length; i < count; i++) {
    		message += '<li>' + quotes[i] + '</li>';
    }
    message += '</ol>';
    output.innerHTML = message;
} // End of updateQuotesPage() function.

function init() {
    'use strict';
    updateQuotesPage(quotes);
    document.getElementById('addbutton').onclick = addQuote;
    document.getElementById('modifybutton').onclick = modifyQuote;
    document.getElementById('deletebutton').onclick = deleteQuote;
    
} // End of init() function.

window.onload = init;