/*
Full Stack JavaScript Techdegree project 1 Random Quote Generator 
Michael Cook

I am aiming for "Exceeds Expectations" but if the code doesn't meet that standard then I will accept "Meets Expectations"
*/


// Array of quote objects 
const quotes = [
  {
    quote: "Many of the works of sublime beauty are the precious fruit of mental agony; and we should be poor, indeed, if the willingness of man to suffer should disappear.",
    source: "Franz Boas, anthropologist and physicist",
    tag: "Philosophical"
  },
  {
    quote: "Those heights by great men, won and kept, Were not achieved by sudden flight. But they, while their companions slept, Were toiling upward in the night.",
    source: "Henry Wadsworth Longfellow",
    tag: "Inspirational"
  },
  {
    quote: "The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little.",
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: "1937",
    tag: "Political"
  },
  {
    quote: "Courage, my friends; 'tis not too late to build a better world.",
    source: "Tommy Douglas",
    tag: "Political"
  },
  {
    quote: "In a time of deceit telling the truth is a revolutionary act.",
    source: "George Orwell"
  },
  {
    quote: "Dreams and reality are opposites. Action synthesizes them",
    source: "Assata Shakur",
    citation: "Assata: An Autobiography",
    year: "1987"
  },
  {
    quote: "A winner is a dreamer who never gives up.",
    source: "Nelson Mandela",
    tag: "Inspirational"
  },
  {
    quote: "Beyond a wholesome discipline, be gentle with yourself. You are a child of the universe no less than the trees and the stars; you have a right to be here.",
    source: "Max Ehrmann",
    citation: "Desiderata",
    year: "1927",
    tag: "Wellness"
  }, 
  {
    quote: "As long as I breathe I hope. As long as I breathe I shall fight for the future, that radiant future, in which man, strong and beautiful, will become master of the drifting stream of his history and will direct it towards the boundless horizons of beauty, joy and happiness!",
    source: "Leon Trotsky",
    citation: "On Optimism and Pessimism, on the Twentieth Century, and on Many Other Things",
    year: "1901"
  }
];



/**
 * Generates a random whole number between 0 and the total number of quotes in the array of quotes 
 * Returns the random quote
 */
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}


/**
 * Get a random colour and change the background to that colour
 */
function changeBackgroundColour() {
  const colours = ['red', 'orange', '#3AC162', 'blue', 'purple', 'teal'];
  document.querySelector('body').style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];
}



/**
 * Calls the getRandomQuote function, generates the html to display the quote and prints it to the page
 */
function printQuote() {
  // change background colour when quote is printed
  changeBackgroundColour();

  const quote = getRandomQuote();
  let html = `<p class='quote'>" ${quote.quote} </p> <p class='source'> ${quote.source}`;
  if (quote.citation) {
    html += `<span class='citation'>" ${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class='year'>${quote.year}</span>`;
  }
  if (quote.tag) {
    html += ` <span> tag: ${quote.tag}</span>`;
  }
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/**
 * Every 20 seconds, print a new random quote and change background colour
 */
setInterval(printQuote, 20000);