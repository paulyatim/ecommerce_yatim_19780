import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
function CartWidget() {
    const {numberOfItems} = useContext(CartContext)
    return (
        <div className='cartIcon'>
            <i className="fas fa-shopping-cart"></i>
            <div><h3 id='itemCountNavBar'>{numberOfItems()}</h3></div>
        </div>
    )
}

export default CartWidget

