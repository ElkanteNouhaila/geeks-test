// ====== Daily Challenge 1
// 1
let sentence = "The movie is not that bad, I like it.";
// 2
let wordNot = sentence.indexOf("not");  
// 3
let wordBad = sentence.indexOf("bad");
// 4 & 5
if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}
// ====== Daily Challenge 2
// 1
let pattern = "";
for (let i = 1; i <= 6; i++) {
    pattern += "* ";
    console.log(pattern);
}
// 2
for (let i = 1; i <= 6; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
