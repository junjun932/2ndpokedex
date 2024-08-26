import { useState } from 'react';
import MOCK_DATA from '../../mock';
import Dashboard from '../assets/components/Dashboard';
import PokemonList from '../assets/components/PokemonList';

//selectedPokemon =삳태 , setSelectedPokemon=상태변경함수 , useState(초기값)
function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((list) => list.id === pokemon.id)) {
      alert('중복된 포켓몬이 있습니다');
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
    // console.log(selectedPokemon);
  };

  const removePokemon = (pokemon) => {
    const updatedPokemonList = selectedPokemon.filter(
      (list) => list.id !== pokemon.id
    );
    setSelectedPokemon(updatedPokemonList);
  };
  console.log(MOCK_DATA);

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
