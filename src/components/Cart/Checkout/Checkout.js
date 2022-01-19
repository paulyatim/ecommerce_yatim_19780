import {useState, useContext} from 'react';
import {getFirestore, collection, addDoc, writeBatch, doc} from 'firebase/firestore';
import {CartContext} from '../../context/CartContext';
import OrderConfirmation from './OrderConfirmation';
import CheckoutForm from './CheckoutForm';

function Checkout() {

    const [formValues, setFormValues] = useState({ name: "", email: "", confirmEmail: ""});
    const [formError, setFormError] = useState("");
    const {cartList, totalPrice, clearCart} = useContext(CartContext);
    const [orderMade, setOrderMade] = useState(false);
    const [orderID, setOrderID] = useState("");

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (formValues.email !== formValues.confirmEmail) {
            setFormError("The emails do not match!");
        } else if (!formValues.name || !formValues.email || !formValues.confirmEmail) {
            setFormError("You must fill all the fields!");
        } else {
            setFormError("");
            let itemsCheckOut = [];
            cartList.map(prod => itemsCheckOut.push({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}));
            let order = {buyer: {name: formValues.name, mail: formValues.email}, 
                        items: itemsCheckOut, 
                        total: totalPrice()};

            const db = getFirestore();
            makeOrder(db, order);
            updateStock(db, order);
            setOrderMade(true);
        }
    }
    function makeOrder(db, order) {
        const orderCollection  = collection(db, 'orders');
        addDoc(orderCollection, order)
        .then(resp => setOrderID(resp.id))
        .catch(error => console.log(error))
    }
    function updateStock(db, order) {
        const batch = writeBatch(db);
        order.items.forEach(prod => {
            let docUpdate = doc(db, 'products', prod.id);
            let stock = cartList.find(i => i.id === prod.id).stock;
            batch.update(docUpdate, {stock: stock - prod.quantity});
        })
        batch.commit();
    }

    return (
        <div className="modal fade" id="orderModal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {orderMade ?
                        <OrderConfirmation orderID={orderID} clearCart={clearCart}/>
                    :
                        <CheckoutForm handleSubmit={handleSubmit} handleChange={handleChange} formValues={formValues} formError={formError}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default Checkout;