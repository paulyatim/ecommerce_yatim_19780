import React from 'react'
import '../../App.css';
import ItemCount from './itemCount'

function Item(props) {

    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.prod.image} className="card-img-top" alt={props.prod.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.prod.name}</h5>
                </div>
                <div className="card-footer">
                    <ItemCount initial={0} stock={props.prod.stock} />
                </div>
            </div>
        </div>
    )
}

export default Item