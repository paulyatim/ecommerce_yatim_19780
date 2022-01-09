import {getFirestore, collection, addDoc} from 'firebase/firestore'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

function MakeOrder({formValues}) {
    console.log(formValues)
    const {cartList, totalPrice} = useContext(CartContext)

    let itemsCheckOut = []
    cartList.map(prod => itemsCheckOut.push({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}))

    let order = {buyer: {name: formValues.name, mail: formValues.email}, 
                 items: itemsCheckOut, 
                 total: totalPrice()}
    
    const db = getFirestore()
    const orderCollection  = collection(db, 'orders')
    addDoc(orderCollection, order)
    .then(resp => console.log(resp.id))
    .catch(error => console.log(error))
    return null;
}
export default MakeOrder;