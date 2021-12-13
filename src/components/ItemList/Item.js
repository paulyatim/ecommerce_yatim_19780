import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'
import ItemCount from './itemCount'

const loadImage = (imageName) => (require(`../../images/${imageName}`).default);

function Item(props) {
    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/detail/${props.prod.id}`}>
                    <img src={loadImage(props.prod.image)} className="card-img-top" alt={props.prod.name}/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.prod.name} - $ {props.prod.price}</h5>
                </div>
                <div className="card-footer">
                    <ItemCount initial={0} stock={props.prod.stock} />
                </div>
            </div>
        </div>
    )
}

export default Item