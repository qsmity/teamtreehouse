
// array with famous quotes , source, and years
var quotes = [ 
   {
    quote:"'Victory goes to the player who makes the next-to-last mistake.'",
   source: "Chessmaster Savielly Grigorievitch Tartakower",
   year:'1887-1956'
   },
   {
    quote: "If a man does his best, what else is there?",
   source: 'General George S. Patton',
   year:'1885-1945'
   },
   {
    quote: '"When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion."',
   source:  'Robert Pirsig',
   year:'1948'
   },
   {
    quote:'"The only way to get rid of a temptation is to yield to it."',
   source: 'Oscar Wilde',
   year:'1854-1900'
   },
   {
    quote:'"Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity."',
   source: 'Martin Luther King Jr.',
   year:'1929-1968'
   }
    
]

function print (message) {
   var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

//generates a random quote by generating a random number of the index
function getRandomQuote () {
   var randomNumber = Math.floor(Math.random() * 4) + 1;
   for (var prop in quotes) {
    var generatedQuote = quotes[randomNumber];
    return generatedQuote;
   }
}

//this function generates the info from the arrays to be printed to the page
function printQuote () {
    var q = getRandomQuote();
    var html = ' ';
    html += '<p class="quote">' + q.quote + '</p>';
    html += '<p class="source">' +
    q.source +
 '<span class="year">' + q.year +
 '</p>';
 document.getElementById('quote-box').innerHTML = html;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
   document.getElementById('loadQuote').addEventListener("click", printQuote, false);

   
   
    



