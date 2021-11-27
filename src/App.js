import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer textoProvisional=" E-commerce de Paul Yatim" />
    </div>
  );
}

export default App;
