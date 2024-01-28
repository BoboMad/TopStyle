import {useState, createContext} from 'react';
import {fetchAllProducts, fetchProductById} from '../services/products';
export const AppContext = createContext();

const ContextProvider = (props) =>{
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);

    const GetAllProducts = () =>{
        fetchAllProducts().then((data) => {
            setProducts(data && data !== undefined ? data : []);
        });
    }

    const GetProduct = (productId) =>{
        fetchProductById(productId).then((data) => {
            setProduct(data && data !== undefined ? data : null);
        });
    }


    return(
        <ContextProvider.Provider value = {{GetAllProducts, GetProduct, products, product}}
        >
            {props.children}
        </ContextProvider.Provider>
    )
}

export default ContextProvider;
