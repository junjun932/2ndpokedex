import styled from 'styled-components';
import { usePokemon } from '../../context/pokemonContext';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  text-align: center;
  border-radius: 10px;
`;

const Button = styled.div`
  border-radius: 5px;
  background-color: orange;
  color: white;
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const usepokemon = usePokemon();
  const navigate = useNavigate();
  console.log(usepokemon);
  return (
    <Card>
      <img
        onClick={() => navigate(`/detail?id=${pokemon.id}`)}
        src={pokemon.img_url}
      />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button onClick={() => onRemove(pokemon)}>삭제</Button>
      ) : (
        <Button onClick={() => onAdd(pokemon)}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
