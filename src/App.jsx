import './App.css';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailsContainer itemId={1} />
    </div>
  );
}

export default App;
