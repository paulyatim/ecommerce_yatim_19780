import { getFetch } from "../../helpers/getFetch";
import {useState, useEffect} from 'react'
import Item from "./Item";
import '../../App.css';


function ItemList() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch.then(res => setProductos(res))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {loading ? <img src={"images/loading-donut.png"} className="loadingDonut" alt="loading..."/> : productos.map((producto) => <Item prod={producto}/>)}
            </div>
        </div>
    )



}
export default ItemList