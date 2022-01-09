import {useState, useContext} from 'react'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'

function Checkout() {

    const initialFormValues = { name: "", email: "", confirmEmail: ""};
    const [formValues, setFormValues] = useState(initialFormValues);
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
            let itemsCheckOut = []
            cartList.map(prod => itemsCheckOut.push({id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}))
            let order = {buyer: {name: formValues.name, mail: formValues.email}, 
                        items: itemsCheckOut, 
                        total: totalPrice()}

            const db = getFirestore()
            const orderCollection  = collection(db, 'orders')
            addDoc(orderCollection, order)
            .then(resp => setOrderID(resp.id))
            .catch(error => console.log(error))
            setOrderMade(true);
        }
    }

    return (
        <div className="modal fade" id="orderModal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {orderMade ?
                        <div className="modal-body confirmationModal">
                            <h3>Your Order has been made!</h3>
                            <p>Your Purchase ID is: <span>{orderID}</span></p>
                            <Link to={"/"}>
                                <button onClick={clearCart} className="btn btn-outline-primary btn-block addBtn" data-bs-dismiss="modal">Continue Shopping</button>
                            </Link>
                        </div>
                    :
                    <div>
                        <div className="modal-header">
                            <h5 className="modal-title">Check Out</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit} id="checkoutForm">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text" 
                                        className="form-control" 
                                        name="name"
                                        id="orderName" 
                                        aria-describedby="emailHelp" 
                                        value={formValues.name}
                                        onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email"
                                        id="orderEmailAddress" 
                                        aria-describedby="emailHelp" 
                                        value={formValues.email}
                                        onChange={handleChange}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="confirmEmail"
                                        id="orderConfirmEmailAddress" 
                                        aria-describedby="emailHelp" 
                                        value={formValues.confirmEmail}
                                        onChange={handleChange}/>
                                </div>
                                <p>{formError}</p>
                                <button type="submit" className="btn btn-primary">Make Order</button>
                            </form>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkout
