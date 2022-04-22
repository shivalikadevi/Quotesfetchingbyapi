//https://type.fit/api/quotes


let real="";
let quotesData="";

const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newQ=document.getElementById("newQ");
const tweetMe=document.getElementById("tweetMe");

const tweetNow = () => {
    let tweetPost=`https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}

const getNewQuote = () =>{
   //let qAuthor=real[rnum].author;
    //let qData=real[rnum].text;
    let rnum=Math.floor(Math.random()*100);
    quotesData=real[rnum];
    quotes.innerHTML=`${real[rnum].text}`;
    quotesData.author == null ? (author.innerText="unknown"):(author.innerText=` By-${real[rnum].author}`);
    
}
const getQuotes = async () =>
{
    const api = "https://type.fit/api/quotes";
    try{let data = await fetch(api);
        real=await data.json();
    console.log(real);
    getNewQuote();
}
    catch(error){}


};

tweetMe.addEventListener('click',tweetNow);
newQ.addEventListener("click",getNewQuote);
    getQuotes();