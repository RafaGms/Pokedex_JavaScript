const listPokemon = document.getElementById("listPokemon");
const loadPage = document.getElementById("loadPage");
var limit = 12;
var offset = 0;

function loadPokemon(offset, limit) {
  pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {
    const newHtml = pokemonList
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.tipo}">
    <span class="number  ">#${pokemon.numero}</span>
    <span class="name">${pokemon.nome}</span>
 
    <div class="details">
       <ol class="types">
          ${pokemon.tipos
            .map((tipo) => `<li class="type ${tipo} ">${tipo}</li>`)
            .join("")}
            </ol>
            <img
            src="${pokemon.foto}"
            alt="${pokemon.nome}">  
            </div>
            </li>`
      )
      .join("");
    listPokemon.innerHTML += newHtml;
  });
}

loadPokemon(offset, limit);

loadPage.addEventListener("click", () => {
  offset += limit;
  loadPokemon(offset, limit);
  console.log(offset);
});
