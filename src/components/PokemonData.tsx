import styles from '../styles/PokemonData.module.scss';

interface PokemonDataProps {
  currentPokemon: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    types: [
      {
        type: {
          name: keyof typeof colours;
        };
      }
    ];
    stats: [
      {
        base_stat: string;
        stat: {
          name: string;
        };
      }
    ];
  };
  sprite: 'default' | 'shiny';
  setCurrentSprite: (sprite: 'default' | 'shiny') => void;
}
const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const PokemonData = ({
  currentPokemon,
  setCurrentSprite,
  sprite,
}: PokemonDataProps) => {
  return (
    <section className={styles.pokemonData}>
      <div className={styles.visualData}>
        <div className={styles.title}>
          <strong>{currentPokemon.name.replace('-', '')}</strong>
          <span>Nº {currentPokemon.id}</span>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={currentPokemon.sprites[`front_${sprite}`]}
            alt={currentPokemon.name}
          />

          {currentPokemon.sprites.front_shiny && (
            <div className={styles.controls}>
              <button
                onClick={() => setCurrentSprite('default')}
                className={sprite == 'default' ? styles.active : ''}></button>
              <button
                onClick={() => setCurrentSprite('shiny')}
                className={sprite == 'shiny' ? styles.active : ''}></button>
            </div>
          )}
        </div>
        <div className={styles.types}>
          {currentPokemon.types.map((i) => (
            <span
              style={{
                background: colours[i.type.name],
              }}>
              {i.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.statusData}>
        <strong>Status</strong>
        <div className={styles.data}>
          {currentPokemon.stats.map((i) => (
            <div key={i.stat.name}>
              <span>{i.stat.name.replace('-', ' ')}</span>
              <span>{i.base_stat}</span>
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
};
