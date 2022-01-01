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
            <div className="col row-cols-md-1">
                {cartList.map(prod => <CartItem prod={prod} key={prod.id}/>)
                }
            </div>
            <h3 className='totalPriceCart'>Total: $ {totalPrice()}</h3>
            <button onClick={clearCart} type="button" className="btn btn-outline-primary btnCart">Clear</button>
            <button type="button" className="btn btn-outline-primary btnCart">Check-out</button>
        </div>
    )
}

export default Cart