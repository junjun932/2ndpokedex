import { useNavigate, useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../../mock';

function PokemonDetail() {
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get('id');
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(', ')}</p>
      {/* {* onClick 이벤트를 완성해주세요. *} */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
}

export default PokemonDetail;
