import { useState, useEffect } from 'react';

type Pokemon = {
  name: string;
  abilities: any;
};
const usePokemon = ({ id }) => {
  let [pokemon, setPokemon] = useState<Pokemon>({ name: null, abilities: [] });

  useEffect(() => {
    const getPokemon = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await resp.json();
      setPokemon(data);
    };
    getPokemon();
  }, []);
  return pokemon;
};

export default function CustomHook() {
  const pokemon = usePokemon({ id: 425 });

  return (
    <div>
      <h1>Pokemon</h1>
      <p>Name: {pokemon.name}</p>
      <div>
        Abilities:
        <ul>
          {pokemon.abilities.map((a) => (
            <li key={`abil-${a.ability.name}`}>{a.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
