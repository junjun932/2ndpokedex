import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  display: grid;
  grid-gap: 10px;
  background-color: grey;
  border-radius: 20px;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAddPokemon}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};
export default PokemonList;
