const quoteAndAuthor = [
    {quote: "Fred kan inte uppnås med våld, den skapas genom förståelse.",
    author: "Albert Einstein",},
    {quote: "En bok är som en trädgård som bärs i fickan.",
    author: "Kinesiskt ordspråk"},
    {quote: "Det finns en visdom sprungen ur huvudet, och en sprungen ur hjärtat.",
    author: "Charles Dickens"},
    {quote: "Om du vill lära känna vägen framför dig, fråga dem som går åt andra hållet.",
    author: "Kinesiskt ordspråk"},
    {quote: "För varje minut du är arg, förlorar du 60 sekunders glädje.",
    author: "Benjamin Franklin"},
    {quote: "Förlorat guld kan återfås, men aldrig förlorad tid.",
    author: "Kinesiskt ordspråk"},
    {quote: "Mer än denna lykta lyser i mörkret, lyser en verkligt god gärning i en mörk värld.",
    author: "William Shakespeare"},
    {quote: "Vägen till målet är målet.",
    author: "Kinesiskt ordspråk"},
    {quote: "Yttre uppvisning är ett dåligt substitut för inre värde.",
    author: "Aisopos"},
    {quote: "Läraren kan öppna dörren, men du måste själv gå in.",
    author: "Kinesiskt ordspråk"},
]

const getRandomQuote = () => {
// Få ett slumpmässigt index nummer, som är hel och inom antal citat vi har.
let index = Math.floor(Math.random()*quoteAndAuthor.length);
let selectedQuote = quoteAndAuthor[index];
let quoteText = selectedQuote.quote;
let quoteAuthor = selectedQuote.author;
let quote = `<div class="card">
<img class="quote-image" src="icons/citat.png">
<h3>${quoteText}</h3>
<p>${quoteAuthor}</p>
</div>`
document.getElementById("quote").innerHTML = quote;
}

let myButton = document.querySelector("#getQuote");
myButton.addEventListener("click", getRandomQuote);