import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from "./ItemList";
import '../../App.css';

function ItemListContainer() {

    return (
        <div>
            <nav className="categoriesNav">
                <Link to={`/category`}>
                    <button type="button" className="btn btn-outline-primary">All Donuts</button>
                </Link>
                <Link to={`/category/regular`}>
                    <button type="button" className="btn btn-outline-primary">Regular Donuts</button>
                </Link>
                <Link to={`/category/filled`}>
                    <button type="button" className="btn btn-outline-primary">Filled Donuts</button>
                </Link>
                <Link to={`/category/special`}>
                    <button type="button" className="btn btn-outline-primary">Special Donuts</button>
                </Link>
            </nav>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
