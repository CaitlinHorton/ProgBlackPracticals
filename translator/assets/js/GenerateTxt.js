const nouns = ["seun", "mesie", "hond", "cat", "skoonlapper"];
const adjs = ["oulik", "mooi", "kwaad", "onbeskof", "slim"];
const verbs = ["hardloop", "loop", "eet", "huil", "praat"];
const adverbs = ["vinnig", "altyd", "stilweg", "hardop", "dikwels"];

let btn = document.getElementById("btn1");
let text = document.getElementById("text")

//WHEN THE BUTTON IS CLICKED IT WILL GENERATE A STRING AND SET THAT TO THE TEXT AREA
btn.addEventListener("click", () => {

    a = nouns[Math.floor(Math.random() * (nouns.length - 1))];
    b = adjs[Math.floor(Math.random() * (adjs.length - 1))];
    c = verbs[Math.floor(Math.random() * (verbs.length - 1))];
    d = adverbs[Math.floor(Math.random() * (adverbs.length - 1))];

    text.innerText = ["Die", b, a, c, d].join(" ");
})

