// ==== Exercise 1
const apiKey = "g0nNgnrVH6BxS02kU3goCu0J2s5X8UG6"; 
const container = document.createElement('div');
document.body.appendChild(container);

async function fetchGif(query="funny") {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`);
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();
    const randomGif = data.data[Math.floor(Math.random()*data.data.length)];
    const img = document.createElement('img');
    img.src = randomGif.images.original.url;
    container.appendChild(img);
  } catch (err) {
    console.error("Error fetching gif:", err);
  }
}
fetchGif();

// Exercise 2: 
let resolveAfter2Seconds = () => new Promise(res => setTimeout(() => {res("slow"); console.log("slow promise is done");}, 2000));
let resolveAfter1Second = () => new Promise(res => setTimeout(() => {res("fast"); console.log("fast promise is done");}, 1000));

let sequentialStart = async () => {
  console.log('==SEQUENTIAL START=='); 
  const slow = await resolveAfter2Seconds(); 
  console.log(slow); 
  const fast = await resolveAfter1Second(); 
  console.log(fast);
}
sequentialStart(); 
// Output: starting slow -> 2s -> slow promise done, slow -> 1s -> fast promise done, fast

// Exercise
let concurrentStart = async () => {
  console.log('==CONCURRENT START with await=='); 
  const slow = resolveAfter2Seconds(); 
  const fast = resolveAfter1Second(); 
  console.log(await slow); 
  console.log(await fast);
}
setTimeout(concurrentStart, 4000);
// Output: starting slow & fast immediately -> fast done 1s, slow done 2s -> logs slow then fast

// Exercise 4
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async url => {
      const resp = await fetch(url);
      if(!resp.ok) throw new Error("Fetch failed");
      return await resp.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops');
  }
}
getData();