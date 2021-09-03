import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom'; 

// Need to switch to a 404 here for nonexistent product ids

function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div><Link to="/">Back to Results</Link></div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li><h4>{product.name}</h4></li>
                        <li>{product.rating} Stars</li>
                        <li>({product.numReviews} Customer Reviews)</li>
                        <br></br>   
                        <li>Price: <b>${product.price}</b></li>
                        <br></br>
                        <li>Description: Nice Shirt</li>
                    </ul>
                </div>
                <div className="details-action"></div>
            </div>
        </div>
}

export default ProductScreen; 