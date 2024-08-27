import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dex from './pages/Dex';
import { PokemonProvider } from './context/pokemonContext';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail" element={<PokemonDetail />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
}
export default App;
