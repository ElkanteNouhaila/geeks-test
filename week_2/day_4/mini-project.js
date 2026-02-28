// ====== Part 1: Quotes Array & Generate Quote ======
let quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", likes: 0 },
    { id: 1, author: "Yoda", quote: "Do or do not. There is no try.", likes: 0 },
    { id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
  ];
  
  let lastIndex = -1; // to avoid showing the same quote twice
  const container = document.querySelector("section");
  
  // display a quote object
  function displayQuote(q) {
    container.innerHTML = `
      <p id="quoteText">${q.quote}</p>
      <p id="quoteAuthor">— ${q.author}</p>
      <div>
        <button id="charWithSpaces">Chars (with spaces)</button>
        <button id="charWithoutSpaces">Chars (no spaces)</button>
        <button id="wordCount">Words</button>
        <button id="likeBtn">Like (${q.likes})</button>
      </div>
    `;
  
    // Stats buttons
    document.getElementById("charWithSpaces").onclick = () => alert(q.quote.length);
    document.getElementById("charWithoutSpaces").onclick = () => alert(q.quote.replace(/\s/g, "").length);
    document.getElementById("wordCount").onclick = () => alert(q.quote.trim().split(/\s+/).length);
    document.getElementById("likeBtn").onclick = () => {
      q.likes++;
      document.getElementById("likeBtn").textContent = `Like (${q.likes})`;
    };
  }
  
  // generate random quote
  document.getElementById("generateQuote").onclick = () => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex && quotes.length > 1);
    lastIndex = index;
    displayQuote(quotes[index]);
  };
  
  // ====== Part 2: Add New Quote ======
  document.getElementById("addQuoteForm").onsubmit = (e) => {
    e.preventDefault();
    const quoteInput = document.getElementById("newQuote").value.trim();
    const authorInput = document.getElementById("newAuthor").value.trim();
    if (!quoteInput || !authorInput) return;
    const newQuote = {
      id: quotes.length,
      author: authorInput,
      quote: quoteInput,
      likes: 0
    };
    quotes.push(newQuote);
    document.getElementById("newQuote").value = "";
    document.getElementById("newAuthor").value = "";
    alert("Quote added!");
  };
  
  // ====== Part 3: Filter by Author ======
  let filteredQuotes = [];
  let currentFilteredIndex = 0;
  
  document.getElementById("filterForm").onsubmit = (e) => {
    e.preventDefault();
    const authorName = document.getElementById("filterAuthor").value.trim();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === authorName.toLowerCase());
    if (filteredQuotes.length === 0) {
      alert("No quotes found for this author");
      return;
    }
    currentFilteredIndex = 0;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  };
  
  // Previous / Next navigation for filtered quotes
  document.getElementById("prevQuote").onclick = () => {
    if (filteredQuotes.length === 0) return;
    currentFilteredIndex = (currentFilteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  };
  
  document.getElementById("nextQuote").onclick = () => {
    if (filteredQuotes.length === 0) return;
    currentFilteredIndex = (currentFilteredIndex + 1) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilteredIndex]);
  };