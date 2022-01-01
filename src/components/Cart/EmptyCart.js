import React from 'react'
import {Link} from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div>
            <h3>Your cart is empty!</h3>
            <Link to={"/"}>
                <button className="btn btn-outline-primary btn-block btnCart">Go back to Home</button>
            </Link>
        </div>
    )
}

export default EmptyCart
