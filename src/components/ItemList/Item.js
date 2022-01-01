import React, {useContext} from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'
import ItemCount from './itemCount'
import { CartContext } from '../context/CartContext';

function Item({prod}) {
    const {addToCart, inStock} = useContext(CartContext)

    function onAddList (quantity) {
        addToCart({...prod, quantity:quantity})
    }

    if (!inStock(prod.id)) {
        console.log("There's no more " + prod.name)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/detail/${prod.id}`}>
                    <img src={prod.image} className="card-img-top" alt={prod.name}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <h6 className='card-subtitle'>$ {prod.price}</h6>
                </div>
                <div className="card-footer">
                    <ItemCount id={prod.id} initial={0} stock={prod.stock} onAdd={onAddList}/>
                </div>
            </div>
        </div>
    )
}

export default Item