import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Item from "./Item";
import '../../App.css';
import loadingImg from "../../images/loading-donut.png";
import {getFirestore, collection, getDocs, query, orderBy, where} from 'firebase/firestore';

function ItemList() {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const queryCollection = category ?
            query(collection(db, 'products'), where('category', '==', category), orderBy('price'))
            :
            query(collection(db, 'products'), orderBy('price'));
        getDocs(queryCollection).then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false));
    }, [category]);


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
    );
}

export default ItemList;