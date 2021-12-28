import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {CartItem} from './CartItem'
import EmptyCart from './EmptyCart'

function Cart() {

    const {cartList, clearCart, totalPrice} = useContext(CartContext)
    
    if (cartList.length === 0) {
        return <EmptyCart/>
    }

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4">
                {cartList.map(prod => <CartItem prod={prod} key={prod.id}/>)
                }
            </div>
            <h3>$ {totalPrice()}</h3>
            <button onClick={clearCart} type="button" className="btn btn-primary">Clear</button>
            <button type="button" className="btn btn-primary">Check-out</button>
        </div>
    )
}

export default Cart