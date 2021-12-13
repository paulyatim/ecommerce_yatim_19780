import { useParams } from 'react-router-dom'
import { getFetch } from "../../helpers/getFetch";
import {useState, useEffect} from 'react'
import Item from "./Item";
import '../../App.css';
import loadingImg from "../../images/loading-donut.png"

function ItemList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCat } = useParams();

    useEffect(() => {
        if (idCat) {
            getFetch.then(res => setProducts(res.filter(prod => prod.category === idCat))) 
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))            
        } else {
            getFetch.then(res => setProducts(res)) 
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))               
        }
    }, [idCat])


    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {loading ? 
                    <img src={loadingImg} className="loadingDonut" alt="loading..."/>
                    :
                    products.map((product) => <Item prod={product} key={product.id}/>)
                }
            </div>
        </div>
    )
}

export default ItemList