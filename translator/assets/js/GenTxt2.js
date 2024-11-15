const nouns = ["seun", "mesie", "hond", "cat", "skoonlapper"];
const adjs = ["oulik", "mooi", "kwaad", "onbeskof", "slim"];
const verbs = ["hardloop", "loop", "eet", "huil", "praat"];
const adverbs = ["vinnig", "altyd", "stilweg", "hardop", "dikwels"];

let btn = document.getElementById("btn1");
let text = document.getElementById("text")
let history = document.getElementById("historyPara")

let nounTxtArea = document.getElementById("inNoun");
let adjTxtArea = document.getElementById("inAdj");
let verbTxtArea = document.getElementById("inVerb");
let adverbTxtArea = document.getElementById("inAdverb");

//WHEN THE BUTTON IS CLICKED IT WILL GENERATE A STRING AND SET THAT TO THE TEXT AREA
btn.addEventListener("click", () => {

    if(nounTxtArea.value == ""){
        a = nouns[Math.floor(Math.random() * (nouns.length - 1))];
    }
    else{
        a = nounTxtArea.value;
    }

    if(adjTxtArea.value == ""){
        b = adjs[Math.floor(Math.random() * (adjs.length - 1))];
    }
    else{
        b = adjTxtArea.value;
    }

    if(verbTxtArea.value == ""){
        c = verbs[Math.floor(Math.random() * (verbs.length - 1))];
    }
    else{
        c = verbTxtArea.value;
    }

    if(adverbTxtArea.value == ""){
        d = adverbs[Math.floor(Math.random() * (adverbs.length - 1))];
    }
    else{
        d = adverbTxtArea.value;
    }
    
    //SHOW THE SCENTENCE
    scentence = ["Die", b, a, c, d].join(" ")
    text.innerText = scentence;

    let para = document.createElement("p")
    para.innerText = scentence
    history.appendChild(para)
})
