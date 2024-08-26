import styled from 'styled-components';

const DashboardContainer = styled.div``;

const Dashboard = ({ seletedPokemon }) => {
  return (
    <DashboardContainer>
      <h2>들어가라 포켓몬 </h2>
      {seletedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {seletedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.korean_name} {pokemon.removePokemon}
            </li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};
export default Dashboard;
