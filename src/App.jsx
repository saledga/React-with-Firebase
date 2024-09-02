import './App.css';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailsContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
