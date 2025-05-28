const api_url = "https://api.api-ninjas.com/v1/quotes"
const api_key = "xWD/r37peLlrZTJOp3r/dg==Ji31HLWmHjybDZoX"
const quote = document.getElementById("quote")
const author = document.getElementById("author")

async function getquote(url) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': api_key 
    }
  });
  var data = await response.json();
  quote.innerHTML = data[0].quote;
  author.innerHTML = data[0].author;
  console.log(data);
}

getquote(api_url);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by" + author.innerHTML, "Tweet Window", "width=600, height=300")
}