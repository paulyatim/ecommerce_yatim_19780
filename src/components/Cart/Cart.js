import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import {CartItem} from './CartItem'
import EmptyCart from './EmptyCart'
import {getFirestore, collection, addDoc} from 'firebase/firestore'

function Cart() {

    const {cartList, clearCart, totalPrice} = useContext(CartContext)
    
    if (cartList.length === 0) {
        return <EmptyCart/>
    }

    function checkOut() {
        let itemsCheckOut = []
        cartList.map(prod => itemsCheckOut.push({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}))

        let order = {buyer: {name: "Paul", phone: "12345678", mail: "paul@mail.com"}, 
                     items: itemsCheckOut, 
                     total: totalPrice()}
        
        const db = getFirestore()
        const orderCollection  = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        // console.log(order)
    }

    return (
        <div>
            <div className="col row-cols-md-1">
                {cartList.map(prod => <CartItem prod={prod} key={prod.id}/>)
                }
            </div>
            <h3 className='totalPriceCart'>Total: $ {totalPrice()}</h3>
            <button onClick={clearCart} type="button" className="btn btn-outline-primary btnCart">Clear</button>
            <button onClick={checkOut} type="button" className="btn btn-outline-primary btnCart">Check-out</button>
        </div>
    )
}

export default Cart