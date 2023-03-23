import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { PokemonData } from './components/PokemonData';
import { api } from './utils/api';

export function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [sprite, setSprite] = useState<'default' | 'shiny'>('default');

  function setCurrentSprite(sprite: 'default' | 'shiny') {
    setSprite(sprite);
  }

  function handleSearchPokemon(pokemon: string) {
    api.get(pokemon).then((response) => setCurrentPokemon(response.data));
    setSprite('default');
  }

  useEffect(() => {
    handleSearchPokemon('1');
  }, []);

  return (
    <>
      <Header handleSearchPokemon={handleSearchPokemon} />
      {currentPokemon && (
        <PokemonData
          currentPokemon={currentPokemon}
          setCurrentSprite={setCurrentSprite}
          sprite={sprite}
        />
      )}
    </>
  );
}
