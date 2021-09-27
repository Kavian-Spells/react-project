import React, { useEffect, useState } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

// Need to switch to a 404 here for nonexistent product ids

function ProductScreen(props) {
    // console.log(props.match.params.id)
    // const product = data.products.find(x=> x._id === props.match.params.id);
    
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id)); 
        return () => {
            //
        };
    }, [])

    // Removed array from above because of below error
    // Line 23:8:  React Hook useEffect has missing dependencies: 
        // 'dispatch' and 'props.match.params.id'. 
        // Either include them or remove the dependency array

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

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
                            <li>Status: {product.inventory > 0? "In Stock": "Unavailable."}</li>
                            <li>Qty: 
                                <select value={qty} onChange={(e) => {
                                    setQty(e.target.value)
                                }}>
                                    {[...Array(product.inventory).keys()].map(x=> 
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                </select>
                            </li>
                            <li>
                                {product.inventory > 0 &&
                                    <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                                } 
                           </li>
                        </ul>
                    </div>
                </div>
                )
        }
            </div>
                
}

export default ProductScreen; 