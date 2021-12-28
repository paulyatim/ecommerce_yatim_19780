import {useContext} from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'
import ItemCount from './../ItemList/itemCount'
import { CartContext } from '../context/CartContext';

export function CartItem({prod}) {
    const {addToCart, removeItem} = useContext(CartContext)
    
    function onAddCart (quantity) {
        addToCart({...prod, quantity:quantity})
    }

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/detail/${prod.id}`}>
                    <img src={prod.image} className="card-img-top" alt={prod.name}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <h6 className='card-subtitle'>{prod.quantity} - $ {(prod.price * prod.quantity).toFixed(2)}</h6>
                    <ItemCount initial={0} stock={prod.stock} onAdd={onAddCart}/>
                    <button onClick={()=>removeItem(prod)} type="button" className="btn btn-danger">Remove item</button>
                </div>
            </div>
        </div>
    )
}
