


// array of object with data
  var quotes = [
    {
      quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      source: "Patrick McKenzie"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      source: "John Lennon",
    },
    {
      quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      source: "Benjamin Franklin",
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light",
      source: "Aristotle",
    },
    {
      quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
      source: "Helen Keller",
    },
    {
      quote:"Don't cry because it's over, smile because it happened.",
      source:"Dr. Seuss"
    }
  ];

// used to set time interval
let timer;

// getRandomQuote function selects and returns a random quote object
function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);  // selects a random quote
  return quotes[quoteIndex];  // returns the random quote
}

//set time function
function startTimer() {
  timer = setInterval(printQuote, 10000);
}

// function to start and restart time interval
function clearTimer() {
  clearInterval(timer);
}

//printQuote function
function printQuote(message) {
  var result = getRandomQuote(); // Calls and stores the getRandomQuote in a variable
  
  var message = "<p class='quote'>" + result.quote + "</p>" +"<p class='source'>" + result.source + "</p>";
  document.getElementById('quote-box').innerHTML = message;
  
// to keep the set interval in a loop
clearTimer();
startTimer();
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);



























printQuote();

console.log();