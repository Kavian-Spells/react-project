import React, { useEffect } from 'react';
import data from '../data';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

// Need to switch to a 404 here for nonexistent product ids

function ProductScreen(props) {
    // console.log(props.match.params.id)
    // const product = data.products.find(x=> x._id === props.match.params.id);
    
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id)); 
        return () => {
            //
        };
    }, [])

    return <div className="back-to-results">
        <div><Link to="/">Back to Results</Link></div>
        {loading? (<div>Loading...</div>):
            error? (<div>{error}</div>):
                (        
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
                            <li>Description: 
                                <div>
                                    {product.description}
                                </div> 
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>Price: {product.price}</li>
                            <li>Status: {product.status}</li>
                            <li>Qty: 
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>
                            <li>
                                <button className="button">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
                )
        }
            </div>
                
}

export default ProductScreen; 