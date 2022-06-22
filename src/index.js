// - Make sure you check and understand the data that is given to you! ✅
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html file. ✅
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card ✅
// - The cards should be nested inside <ul class="cards"></ul> ✅
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default  ✅

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

function createAPokemonCard(pokemon) {
  let liEl = document.createElement("li");
  liEl.className = "card";

  let h2El = document.createElement("h2");
  h2El.className = "card--title";
  h2El.textContent = pokemon.name.toUpperCase();

  let imgEl = document.createElement("img");
  imgEl.className = "card--img";
  imgEl.width = 256;
  imgEl.src = pokemon.sprites.other["official-artwork"].front_default;

  let ulEl = document.createElement("ul");
  ulEl.className = "card--text";

  let liEl1 = document.createElement("li");
  liEl1.textContent = `${pokemon.stats[0].stat.name}: ${pokemon.stats[0].base_stat}`.toUpperCase();

  let liEl2 = document.createElement("li");
  liEl2.textContent = `${pokemon.stats[1].stat.name}: ${pokemon.stats[1].base_stat}`.toUpperCase();

  let liEl3 = document.createElement("li");
  liEl3.textContent = `${pokemon.stats[2].stat.name}: ${pokemon.stats[2].base_stat}`.toUpperCase();

  let liEl4 = document.createElement("li");
  liEl4.textContent = `${pokemon.stats[3].stat.name}: ${pokemon.stats[3].base_stat}`.toUpperCase();

  let liEl5 = document.createElement("li");
  liEl5.textContent = `${pokemon.stats[4].stat.name}: ${pokemon.stats[4].base_stat}`.toUpperCase();

  let liEl6 = document.createElement("li");
  liEl6.textContent = `${pokemon.stats[5].stat.name}: ${pokemon.stats[5].base_stat}`.toUpperCase();

  liEl.append(h2El, imgEl, ulEl);
  ulEl.append(liEl1, liEl2, liEl3, liEl4, liEl5, liEl6);

  let pokemonUl = document.querySelector(".cards");
  pokemonUl.append(liEl);
}
for (let pokemon of data) {
  createAPokemonCard(pokemon);
}
