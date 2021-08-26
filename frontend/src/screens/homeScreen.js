import React from 'react';
import data from '../data';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 


function HomeScreen(props) {
    return <ul className="product">
    {
      data.products.map(product => 
        <li>
            <div className="product">
                <Link to={'/product/' + product._id}>{product.name}</Link>
                <img className="product-image" src={product.image} alt="product"></img>
                <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div>
            </div>
        </li>)
    }
  </ul>
}

export default HomeScreen; 