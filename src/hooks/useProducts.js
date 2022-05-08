import axios from 'axios';
import{ useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        axios.get('https://intense-castle-31682.herokuapp.com/product')
            .then(data => setProducts(data.data));
    }, [])
    return [products, setProducts];
};

export default useProducts;