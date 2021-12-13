import React from 'react'
import '../../App.css';
import ItemCount from '../ItemList/itemCount';

const loadImage = (imageName) => (require(`../../images/${imageName}`).default);
//key={props.prod.id}
function Detail(props) {

    return (
        <div >
            <h3>{props.prod.name}</h3>
            <img src={loadImage(props.prod.image)} alt={props.prod.name}/>
            <p>{props.prod.price}</p>
            <p>{props.prod.desc}</p>
            <ItemCount initial={0} stock={props.prod.stock}/>
        </div>
    )
}

export default Detail