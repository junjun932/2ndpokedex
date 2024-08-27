import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const DashboardContainer = styled.div``;

const Dashboard = ({ seletedPokemon, onRemovePokemon }) => {
  return (
    <DashboardContainer>
      <h2>들어가라 포켓몬 </h2>
      {seletedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {seletedPokemon.map((pokemon) => (
            // <li key={pokemon.id}>
            //   {pokemon.korean_name}
            //   {pokemon.removePokemon} <img src={pokemon.img_url} />
            //   <button>삭제</button>
            // </li>

            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={onRemovePokemon}
              isSelected={true}
            />
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};
export default Dashboard;
