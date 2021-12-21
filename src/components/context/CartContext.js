import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext()


export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1) {
            const oldQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity : item.quantity + oldQuantity}])
        } else {
            setCartList([...cartList, item])
        }
    }
    function clearCart() {
        setCartList([])
    }

    function numberOfItems() {
        let totalQuantity = 0;
        if (cartList !== []) {
            cartList.forEach(item => {
                totalQuantity += item.quantity;
            });
        }
        return totalQuantity;
    }

    function totalPrice() {
        let totalPrice = 0;
        if (cartList !== []) {
            cartList.forEach(item => {
                totalPrice += (item.quantity * item.price);
            });
        }
        return totalPrice.toFixed(2);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clearCart, numberOfItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

//export default CartContextProvider
