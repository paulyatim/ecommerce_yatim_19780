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
        <div className='row detailCard'>
            <div className="col-md-6">
                <img className='detailImg' src={prod.image} alt={prod.name}/>
            </div>
            <div className="col-md-6 detailCardData">
                <h3 className='card-title'>{prod.name}</h3>
                <p className='card-subtitle'>{prod.price}</p>
                {goCart ?
                    <div>
                        <Link to={"/cart"}>
                            <button className="btn btn-outline-primary btn-block addBtn">Go to Cart</button>
                        </Link>
                        <br/>
                        <Link to={"/"}>
                            <button className="btn btn-outline-primary btn-block addBtn">Continue Shopping</button>
                        </Link>
                    </div>
                    : 
                    <ItemCount initial={0} stock={prod.stock} onAdd={onAddDetail}/>
                }
                <p className='card-subtitle'>{prod.desc}</p>
            </div>
        </div>
    )
}

export default Detail