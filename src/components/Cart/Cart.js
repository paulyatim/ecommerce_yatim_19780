import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

const loadImage = (imageName) => (require(`../../images/${imageName}`).default);

function Cart() {

    const {cartList, clearCart, totalPrice} = useContext(CartContext)

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4">
                {cartList.map(prod =>
                     <div key={prod.id}>
                        <div className="col">
                            <div className="card h-100">
                                <Link to={`/detail/${prod.id}`}>
                                    <img src={loadImage(prod.image)} className="card-img-top" alt={prod.name}/>
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <h6 className='card-subtitle'>{prod.quantity} - $ {(prod.price * prod.quantity).toFixed(2)}</h6>
                                </div>
                            </div>
                        </div>
                     </div>
                    )
                }
            </div>
            <h3>$ {totalPrice()}</h3>
            <button onClick={clearCart} type="button" className="btn btn-primary">Clear</button>
            <button type="button" className="btn btn-primary">Check-out</button>
        </div>
    )
}

export default Cart