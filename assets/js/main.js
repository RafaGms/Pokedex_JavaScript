const offset = 0;
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function pokemonConvertTypes(pokemonTypes){
return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonConvertToHtml(pokemon){
   return `<li class="pokemon">
   <span class="number">#${pokemon.order}</span>
   <span class="name">${pokemon.name}</span>

   <div class="details">
      <ol class="types">
         ${pokemonConvertTypes(pokemon.types).join('')}
      </ol>
      <img
         src="${pokemon.sprites.other.dream_world.front_default}"
         alt="${pokemon.name}">
   </div>
</li>`
}

const listPokemon = document.getElementById('listPokemon')

pokeApi.getPokemon().then((pokemonList = [])  => { 

listPokemon.innerHTML += pokemonList.map(pokemonConvertToHtml).join('');;

// const listItems = [];
   // for (let i = 0; i < pokemonList.length; i++) {
   //    const pokemon = pokemonList[i];
   //    listItems.push(pokemonConvertToHtml(pokemon));
   //    // listPokemon.innerHTML += pokemonConvertToHtml(pokemon);
   // }
   // console.log(listItems);
})

