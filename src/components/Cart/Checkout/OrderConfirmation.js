import {Link} from 'react-router-dom';

const OrderConfirmation = ({orderID, clearCart}) => {
    return (
        <div className="modal-body confirmationModal">
            <h3>Your Order has been made!</h3>
            <p>Your Purchase ID is: <span>{orderID}</span></p>
            <Link to={"/"}>
                <button onClick={clearCart} className="btn btn-outline-primary btn-block addBtn" data-bs-dismiss="modal">Continue Shopping</button>
            </Link>
        </div>
    );
}

export default OrderConfirmation;