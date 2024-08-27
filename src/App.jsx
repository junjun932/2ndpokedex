import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dex from './pages/Dex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
