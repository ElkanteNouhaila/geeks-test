// ==== Exercice1

const apiKey = "my api key"; 

const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter category";
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Fetch GIF";
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete All GIFs";
deleteButton.type = "button";

document.body.appendChild(form);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(deleteButton);

const gifContainer = document.createElement("div");
document.body.appendChild(gifContainer);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5`)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            data.data.forEach(gif => {
                const img = document.createElement("img");
                img.src = gif.images.fixed_height.url;
                img.alt = gif.title;
                gifContainer.appendChild(img);
            });
        })
        .catch(err => console.error("Fetch error: ", err));
});

deleteButton.addEventListener("click", () => {
    gifContainer.innerHTML = "";
});

// ==== Exercice2

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]); 
        console.log(messages[1]); 
    });
};

setTimeout(concurrentPromise, 1000);

// 1s after setTimeout: "==CONCURRENT START with Promise.all=="
// Immediately: "starting slow promise" & "starting fast promise"
// After 1s: "fast promise is done"
// After 2s: "slow promise is done"
// Then logs: "slow" then "fast"

// ==== Exercice3

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==');
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))()
    ]);
};

setTimeout(parallel, 5000);

// 5s after page load: "==PARALLEL with await Promise.all=="
// Immediately: "starting slow promise" & "starting fast promise"
// After 1s: "fast promise is done" and console.log("fast")
// After 2s: "slow promise is done" and console.log("slow")

// ==== Exercice4

let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
};

setTimeout(parallelPromise, 13000);


// 13s after page load: "==PARALLEL with Promise.then=="
// Immediately: "starting slow promise" & "starting fast promise"
// After 1s: "fast promise is done" and console.log("fast")
// After 2s: "slow promise is done" and console.log("slow")