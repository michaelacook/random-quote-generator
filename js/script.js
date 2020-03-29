/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Workers of the world, unite!",
    source: "Karl Marx",
    citation: "Communist Manifesto",
    year: "1848"
  },
  {
    quote: "Many of the works of sublime beauty are the precious fruit of mental agony; and we should be poor, indeed, if the willingness of man to suffer should disappear.",
    source: "Franz Boas, anthropologist and physicist"
  },
  {
    quote: "Those heights by great men, won and kept, Were not achieved by sudden flight. But they, while their companions slept, Were toiling upward in the night.",
    source: "Henry Wadsworth Longfellow"
  },
  {
    quote: "The test of our progress is not whether we add more to the abundance of those who have much; it is whether we provide enough for those who have too little.",
    source: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: "1937"
  },
  {
    quote: "Courage, my friends; 'tis not too late to build a better world.",
    source: "Tommy Douglas"
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
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}



/***
 * `printQuote` function
***/
function printQuote() {
  const quote = getRandomQuote();
  let html = "<p class='quote'>" + quote.quote + "</p>" + "<p class='source'>" + quote.source;
  if (quote.citation) {
    html += "<span class='citation'>" + quote.citation + "</span>";
  }
  if (quote.year) {
    html += "<span class='year'>" + quote.year + "</span>";
  }
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);