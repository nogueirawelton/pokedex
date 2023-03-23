import { FormEvent, useState } from 'react';
import searchIcon from '../assets/icons/search.svg';
import styles from '../styles/Header.module.scss';

import pokeball from '../assets/icons/pokeball.svg';

interface HeaderProps {
  handleSearchPokemon: (pokemon: string) => void;
}

export const Header = ({ handleSearchPokemon }: HeaderProps) => {
  const [searchPokemon, setSearchPokemon] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSearchPokemon(searchPokemon.toLowerCase());
  };

  const limit = 1010;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <h1>Nome ou Número</h1>
            <div>
              <input
                type="text"
                placeholder="Charizard"
                value={searchPokemon}
                onChange={(e) => setSearchPokemon(e.target.value)}
              />
              <button
                type="submit"
                disabled={!searchPokemon.length}>
                <img
                  src={searchIcon}
                  alt="Search"
                />
              </button>
            </div>
          </form>
          <div className={styles.info}>
            <p>
              Realize a busca por Pokémon pelo nome ou usando o número da
              Pokédex Nacional.
            </p>
          </div>
        </div>
      </header>
      <div className={styles.randomContainer}>
        <button
          onClick={() =>
            handleSearchPokemon(Math.ceil(Math.random() * limit).toString())
          }>
          Pokemon Aleatório{' '}
          <img
            src={pokeball}
            alt="Pokemon Aleatorio"
          />
        </button>
      </div>
    </>
  );
};
