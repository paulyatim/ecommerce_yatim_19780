import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handlerAdd =()=>{
        if(count < stock) setCount(count + 1);
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1);
    }   

    // const handlerOnAdd=()=>{
    //     setCount(initial);
    // }

    return (
        <div>
            <button className="btn btn-primary" onClick={handlerRm}>-</button>
            <label className ="itemCountInput">{count}</label>
            <button className="btn btn-primary" onClick={handlerAdd}>+</button><br/>
            <button className="btn btn-outline-primary btn-block" onClick={() => onAdd(count)} disabled={count === 0}>Add</button>
        </div>           
    )
}


export default ItemCount
