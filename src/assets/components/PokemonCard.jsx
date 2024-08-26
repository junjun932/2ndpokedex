import styled from 'styled-components';

const Card = styled.div``;

const Button = styled.div``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  console.log(pokemon);
  return (
    <Card>
      <img src={pokemon.img_url} alt={`${pokemon.korean_name}`} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <button
          type="button"
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </button>
      )}
    </Card>
  );
}

export default PokemonCard;
