import React, {useState, useContext} from 'react'
import '../../App.css';
import ItemCount from '../ItemList/itemCount';
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

function Detail({prod}) {

    const {addToCart} = useContext(CartContext)
    const [goCart, setGoCart] = useState(false)
    function onAddDetail (quantity) {
        setGoCart(true)
        addToCart({...prod, quantity:quantity})
    }

    return (
        <div >
            <h3>{prod.name}</h3>
            <img src={prod.image} alt={prod.name}/>
            <p>{prod.price}</p>
            <p>{prod.desc}</p>
            {goCart ?
                <div>
                    <Link to={"/cart"}>
                        <button className="btn btn-outline-primary btn-block">Go to Cart</button>
                    </Link>
                    <br/>
                    <Link to={"/"}>
                        <button className="btn btn-outline-primary btn-block">Continue Shopping</button>
                    </Link>
                </div>
                : 
                <ItemCount initial={0} stock={prod.stock} onAdd={onAddDetail}/>
            }
        </div>
    )
}

export default Detail