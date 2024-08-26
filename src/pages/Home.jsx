import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App container">
      <div className="header">
        <h1>포켓몬 도감</h1>
        <img src="pokedex.png" alt="pokedex-imgage" className="pokedex-image" />
        <button className="start-button" onClick={() => navigate('/dex')}>
          포켓몬 도감 시작하기
        </button>
      </div>
    </div>
  );
}
export default Home;
