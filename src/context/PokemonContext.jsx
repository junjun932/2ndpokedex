import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    //addlogig here
  };

  const removePokemon = (pokemon) => {
    //removelogic here
  };
  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
