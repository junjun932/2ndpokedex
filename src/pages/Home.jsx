import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <img src="pokedex.png" alt="pokedex-imgage" className="pokedex-image" />
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </div>
  );
}
export default Home;
