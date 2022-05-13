const quoteBtn = document.querySelector('.quote_btn');
const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.name');
const speech = document.querySelector('.speech');
const copy = document.querySelector('.copy');
const toast = document.querySelector('.toast');

quoteBtn.addEventListener('click',async function(){
  
    quoteBtn.innerText = 'Loading Quote...'
    quoteBtn.classList.add('loading')
    const res = await fetch('https://free-quotes-api.herokuapp.com/')
    const {quote,author} = await res.json()
    quoteText.innerText = quote;
    authorName.innerText = author;
    quoteBtn.innerText = 'New Quote';
    quoteBtn.classList.remove('loading')
})

speech.addEventListener('click',function(){
    if(!quoteBtn.classList.contains('loading')){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    speechSynthesis.speak(utterance)
    }
})

copy.addEventListener('click',function(){
    navigator.clipboard.writeText(`${quoteText.innerText}`);
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 2000);
})