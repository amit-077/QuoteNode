//CREATING AN ARRAY TO STORE THE NUMBERS//
let quote_numbers = [];
let count = 0;

// GENERATE A RANDOM NUMBERS
function randomQuote(){
  let num = Math.random();
  num = Math.round((num*1600)+1);
  return num;
}

// CALLING THE API

fetch("https://type.fit/api/quotes")
.then(function(response){
  return response.json();
}).then(function(data){
  displayQuote(data);
  nextQuote(data);
  previousQuote(data);
});


// ASSIGNING THE QUOTE TO HTML
function displayQuote(data){
  let quote = randomQuote();
  quote_numbers.push(quote);
  document.getElementById("quote-text").innerHTML = (data[quote].text);
  if(data[quote].author == null){
  document.getElementById("quote-author").innerHTML = "Unknown";
}else{
  document.getElementById("quote-author").innerHTML = (data[quote].author);
  visit_author(data[quote].author);
}
};


// WHEN NEXT BUTTON CLICKED, NEW QUOTE APPEARS.
function nextQuote(data){
  let data1 = data;
document.getElementById("next-quote").addEventListener("click",function(){
  displayQuote(data1)
  document.getElementById("previous").style.display = "block";
})
};

//WHEN PREVIOUS BUTTON CLICKED, PREVIOUS QUOTE APPEARS.
function previousQuote(data){
  document.getElementById("previous-quote").addEventListener("click",function(){
  let previous_quote = quote_numbers[(quote_numbers.length)-2];
  document.getElementById("quote-text").innerHTML = (data[previous_quote].text);
  document.getElementById("quote-author").innerHTML = (data[previous_quote].author);
  document.getElementById("previous").style.display = "none";
  visit_author(data[previous_quote].author);

});
};



// CLICK AUTHOR NAME AND GET ON AUTHOR'S WIKIPEDIA PAGE
function visit_author(author_name){
  document.getElementById("quote-author").href = "https://en.wikipedia.org/wiki/"+(author_name);
};
