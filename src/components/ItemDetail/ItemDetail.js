import { Products } from "../../helpers/Products";
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Detail from "./Detail";
import '../../App.css';
import loadingImg from "../../images/loading-donut.png"

function ItemDetail() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(() => {

        Products.then(res => setProduct(res.find(prod => prod.id === id))) 
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))

    }, [id])


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {loading ? 
                <img src={loadingImg} className="loadingDonut" alt="loading..."/>
                :
                <Detail prod={product}/>
            }
            </div>
        </div>
    )



}
export default ItemDetail