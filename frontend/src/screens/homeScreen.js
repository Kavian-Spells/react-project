import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
// import { connect } from 'react-redux'; 
// connect is needed for mapStateToProps

function HomeScreen(props) {

  // const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;

  // Needed cors in order to call localhost:5000 
  // Might want to make localhost:5000 a global variable or stick it into redux
  // This will help you avoid problems when you deploy it 
  
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(products);
    // const fetchData = async () => {
    //   const { data } = await axios.get('http://localhost:5000/api/products');
    //   setProduct(data);
    // }
    // fetchData();
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

    return loading? <div>Loading...</div> :
    error? <div>{error}</div> :
    <ul className="products"> {
      products.map((product) => 
        <li key={product._id}>
            <div className="product">
                <Link to={'/product/' + product._id}>
                  <img className="product-image" src={product.image} alt="product"></img>
                </Link>
                <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div>
            </div>
        </li>
      )
    }
  </ul>
}

// const mapStateToProps = (state) => {
//   console.log(state);
// }
// const HomeScreen = connect(mapStateToProps, null)(HomeScreenUI)
export default HomeScreen; 