const button = document.getElementById("btn");
const card = document.getElementById("character-card");

// Generate random ID between 1 and 83
function getRandomId() {
  return Math.floor(Math.random() * 83) + 1;
}

async function fetchCharacter() {
  card.innerHTML = `
    <div class="loading">
      <i class="fa-solid fa-spinner fa-spin"></i>
      Loading...
    </div>
  `;

  try {
    const randomId = getRandomId();

    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!response.ok) throw new Error("Failed to fetch character");

    const data = await response.json();
    const character = data.result.properties;

    // Fetch homeworld
    const homeworldResponse = await fetch(character.homeworld);
    if (!homeworldResponse.ok) throw new Error("Failed to fetch homeworld");

    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;

    // Display data
    card.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Home World:</strong> ${homeworldName}</p>
    `;

  } catch (error) {
    card.innerHTML = `
      <div class="error">
        <i class="fa-solid fa-triangle-exclamation"></i>
        Oops! Something went wrong.
      </div>
    `;
  }
}

button.addEventListener("click", fetchCharacter);