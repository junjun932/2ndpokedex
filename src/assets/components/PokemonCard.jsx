const Card = styled.div``;

const Button = styled.div``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <card>
      <img src={""} alt={""} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button onClick={() => {}}>삭제</Button>
      ) : (
        <Button onClick={() => {}}>추가</Button>
      )}
    </card>
  );
}

export default PokemonCard;
