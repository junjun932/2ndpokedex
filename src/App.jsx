import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dex from './pages/Dex';
import { PokemonProvider } from './context/pokemonContext';

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
        </Routes>
      </PokemonProvider>
    </BrowserRouter>
  );
}
export default App;
