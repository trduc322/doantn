import React, {useState, useEffect, createContext} from 'react';
import callApi from '../../apiCaller'
export const ProductsContext = createContext();
export const ProductsProvider = props => {
    const [brands, setBrands] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        Promise.all([
            callApi(`LaptopSpec`, "GET", null),
            callApi(`Brand`, "GET", null)
        ]).then(res => {
            setLaptops(res[0].data)
            setBrands(res[1].data)
        })
        setLoading(false)
    }, []);
    return (
    <ProductsContext.Provider value={ { laptops, brands, loading } }>
        {props.children}
    </ProductsContext.Provider>
    );
}