import {useContext} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import CartCount from './CartCount';

export function CartItem({prod}) {
    
    const {addToCart, removeItem} = useContext(CartContext);
    
    function onChange (quantity) {
        addToCart({...prod, quantity:quantity});
    }

    return (
        <div className="card mb-3 cartCard">
            <div className="row cartCardData">
                <div className="col-md-2">
                    <Link to={`/detail/${prod.id}`}>
                        <img src={prod.image} className="card-img" alt={prod.name}/>
                    </Link>
                </div>
                <div className="col-md-4">
                    <h5 className="card-title">{prod.name}</h5>
                </div>
                <div className="col-md-2">
                    <h5 className='card-title'>$ {(prod.price * prod.quantity).toFixed(2)}</h5>
                </div>
                <div className="col-md-1">
                    <h5 className='card-title'>{prod.quantity}</h5>
                </div>
                <div className="col-md-2">
                    <CartCount quantity={prod.quantity} stock={prod.stock} onChange={onChange}/>
                </div>
                <div className="col-md-1">
                    <button onClick={()=>removeItem(prod)} type="button" className="btn close btn-outline-primary btnRm">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}