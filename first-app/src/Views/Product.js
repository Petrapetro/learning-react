import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const url = 'https://5fac231503a60500167e7900.mockapi.io/products/3';
    const [product, setProduct] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
    }, [url])

    if (product) {
        return (
            content = 
            <div>
                <h1>{product.name}</h1>
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default Product;
