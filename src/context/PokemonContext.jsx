import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prev) => prev.filter((p) => p !== pokemon));
  };
  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
