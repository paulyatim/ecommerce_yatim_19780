import React from 'react'
import ItemList from './ItemList'

function ItemListContainer(props) {


    return (
        <div className="itemList">
            <ItemList/>
            <h2>{props.textoProvisional}</h2>
        </div>
    )
}

export default ItemListContainer
