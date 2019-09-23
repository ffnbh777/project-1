// array of objects with data
    var quotes = [
    {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "twitter"
    },
    {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
    },
    {
    quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin"
    },
    {
    quote:"Government is not the solution to our problem; government is the problem. ",
    source: "President Ronald Reagan",
    year: "1981"
    },
    {
    quote: "You know you're getting old when the candles cost more than the cake.",
    source:"Bob Hope"
    },
    {
    quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
    source: "Linus Torvolds",
    category: "Category: Programming"
    },
    {
    quote: "Price is what you pay.Value is what you get.",
    source: "Warren Buffet",
    tag: " , #warrenbuffet"
    }
    ];

//created array of objects to store colors for getrandomColor to choose
var colors = [
    {
        background: "#ff2e63", //pink
        button: "#252a34"
    },
    {
        background: "#00adb5", //teal
        button: "#393e46"
    },
    {
        background: "#f38181", //salmon
        button: "#625772"
    },
    {
        background: "#6639a6", //purple
        button: "#521262"
    },
    {
        background: "#3f72af", //blue
        button: "#112d4e"
    },
    {
        background: "#f95959", //orange
        button: "#455d7a"
    },
    {
        background: "#a3de83", //lt green
        button: "#2eb872"
    },
    {
        background: "#118df0", //bright blue
        button: "#0e2f56"
    },
    {
        background: "#ff5722", //bright orange
        button: "#393e46"
    },
    {
        background: "#3fc1c9", //aqua
        button: "#fc5185"
    }
];

// used to set time interval
    let timer;

// generates a random number, assigns it to a variable, then uses it to return a random object from the quotes array
function getRandomQuote() {
   let randomQuote = Math.floor(Math.random() * quotes.length );
   
   return quotes[randomQuote];
} 

// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
   let randomColor = Math.floor(Math.random() * colors.length);

   return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
    timer = setInterval(printQuote, 10000);
}

// function to start and restart time interval
function clearTimer() {
    clearInterval(timer);
}

// creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
// creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
// creates the html variable and uses the currentQuote variable along with key values to build a string
function printQuote() {
   let currentQuote = getRandomQuote();
   let currentColor = getRandomColor();
   let html = "<p class='quote'> " + currentQuote.quote +  "</p>";
   html += "<p class='source'> " + currentQuote.source; 

//checks for citation property present in currentQuote if true adds to the string
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
        
    }
// checks for category property present in currentQuote if true adds to the string
    if ("category" in currentQuote) {
        html += "<span class='category'> " + currentQuote.category + "</span>";
    }
   
// checks for year property present in currentQuote if true adds to the string
    if ("year" in currentQuote) {
        html += "<span class='year'> " + currentQuote.year + "</span>";
    }
// checks for tag property present in currentQuote if true adds to the string
    if ("tag" in currentQuote) {
        html += "<span class='tag'>" + currentQuote.tag + "</span>";
    }
   
// writes the info from the html variable to the div with the quote-box id
// uses the currentColor variable to change the background color
// uses the currentColor variable to change the button color
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.background = currentColor.background;
    document.getElementById("loadQuote").style.background = currentColor.button;
    
// clears any previous timers that might be running and starts a new one
    clearTimer();
    startTimer();
}

// runs the printQuote function upon initial page load
    printQuote();

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);




























