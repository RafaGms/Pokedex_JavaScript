const pokeApi = {};

pokeApi.getPokemon = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((responsive) => responsive.json())
    .then((bodyJason) => bodyJason.results)
    .catch((error) => console.error(error))
};
