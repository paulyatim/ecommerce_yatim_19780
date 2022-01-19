import {Link} from 'react-router-dom';
import ItemList from "./ItemList";
import '../../App.css';

function ItemListContainer() {

    return (
        <div>
            <nav className="categoriesNav">
                <Link to={`/category`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">All Donuts</button>
                </Link>
                <Link to={`/category/regular`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Regular Donuts</button>
                </Link>
                <Link to={`/category/filled`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Filled Donuts</button>
                </Link>
                <Link to={`/category/special`}>
                    <button type="button" className="btn btn-outline-primary categoriesBtn">Special Donuts</button>
                </Link>
            </nav>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;