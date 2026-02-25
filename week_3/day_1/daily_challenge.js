// challenge 1
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const allStrings = words.every(word => typeof word === "string");
  
      if (allStrings) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject("Error: Not all items are strings.");
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort();
        resolve(sorted);
      } else {
        reject("Error: Array length is not greater than 4.");
      }
    });
  }
  
  // Test 1
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 2
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 3
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) 
    .catch(error => console.log(error));

// challenge 2
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseJS);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:").toLowerCase();
      const translation = [];
  
      for (let char of userInput) {
        if (morseJS[char]) {
          translation.push(morseJS[char]);
        } else {
          reject(`Character "${char}" does not exist in Morse object`);
          return;
        }
      }
  
      resolve(translation);
    });
  }
  
  function joinWords(morseTranslation) {
    const output = morseTranslation.join("\n");
    const pre = document.createElement("pre");
    pre.textContent = output;
    document.body.appendChild(pre);
  }
  
  // Chain
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));