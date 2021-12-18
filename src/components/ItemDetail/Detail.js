import React, {useState} from 'react'
import '../../App.css';
import ItemCount from '../ItemList/itemCount';
import {Link} from 'react-router-dom'

const loadImage = (imageName) => (require(`../../images/${imageName}`).default);
//key={props.prod.id}
function Detail(props) {

    const [goCart, setGoCart] = useState(false)
    function onAdd (quantity) {
        setGoCart(true)
    }

    return (
        <div >
            <h3>{props.prod.name}</h3>
            <img src={loadImage(props.prod.image)} alt={props.prod.name}/>
            <p>{props.prod.price}</p>
            <p>{props.prod.desc}</p>
            {goCart ?
                <div>
                    <Link to={"/cart"}>
                        <button className="btn btn-outline-primary btn-block">Go to Cart</button>
                    </Link>
                    <br/>
                    <Link to={"/"}>
                        <button className="btn btn-outline-primary btn-block">Continue Shopping</button>
                    </Link>
                </div>
                : 
                <ItemCount initial={0} stock={props.prod.stock} onAdd={onAdd}/>
            }
        </div>
    )
}

export default Detail