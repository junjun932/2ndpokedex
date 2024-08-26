import styled from "styled-components";

const Card = styled.div``;

const Button = styled.div``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  console.log(pokemon);
  return (
    <Card>
      <img src={pokemon.img_url} alt={`${pokemon.korean_name}`} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      ) : (
        <Button onClick={onRemove}>삭제</Button>
      )}
    </Card>
  );
}

export default PokemonCard;
