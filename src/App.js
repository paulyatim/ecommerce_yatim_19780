import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route exact path="/"
            element={<ItemListContainer/>}
          />
          <Route path="/category/"
            element={<ItemListContainer/>}
          />
          <Route path="/category/:idCat"
            element={<ItemListContainer/>}
          />
          <Route exact path="/detail/:id"
            element={<ItemDetailContainer/>}
          />
          <Route exact path="/cart"
            element={<Cart/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
