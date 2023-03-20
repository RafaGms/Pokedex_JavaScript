const pokeApi = {};

function convertPokeApiDetail(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.numero = pokeDetail.order;
  pokemon.nome = pokeDetail.name;

  const tipos = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [tipo] = tipos;

  pokemon.tipos = tipos;
  pokemon.tipo = tipo;

  pokemon.foto = pokeDetail.sprites.other.dream_world.front_default;
  return pokemon;
} 

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetail);
};

pokeApi.getPokemon = (offset, limit) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((responsive) => responsive.json())
    .then((bodyJason) => bodyJason.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetail) => pokemonDetail)
    .catch((error) => console.error(error));
};
