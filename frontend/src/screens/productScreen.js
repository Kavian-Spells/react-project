import React from 'react';
import data from '../data';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 


function ProductScreen(props) {
     console.log(props.match.params.id)
     const product = data.products.find(x=> x._id === props.match.params.id);
    return <div className="details">
        <div>
            <Link to="/">Back to Results</Link>
        </div>
        <div></div>
        <h1>{product.name}</h1>
    </div>
}

export default ProductScreen; 