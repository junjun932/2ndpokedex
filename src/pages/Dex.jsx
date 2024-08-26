import { useState } from "react";
import MOCK_DATA from "../../mock";
import Dashboard from "../assets/components/Dashboard";
import PokemonList from "../assets/components/PokemonList";

//selectedPokemon =삳태 , setSelectedPokemon=상태변경함수 , useState(초기값)
function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    return [...selectedPokemon, pokemon];
  };

  const removePokemon = (pokemon) => {
    {
      // return selectedPokemonList.filter(())
    }
  };

  return (
    <div>
      <Dashboard
        seletedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />

      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </div>
  );
}
export default Dex;
