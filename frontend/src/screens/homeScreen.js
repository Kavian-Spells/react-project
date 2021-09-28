import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'; 
// import axios from 'axios'; --> redux thunk allows us to use ajax requests to backend
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
// import { connect } from 'react-redux'; 
// connect is needed for mapStateToProps

function HomeScreen(props) {

  // const [products, setProduct] = useState([]); --> React Hook
  // const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList); //fetches product list from redux store
  const { products, loading, error } = productList; //further extraction from store/reducers
  // console.log(category);

  // Needed cors in order to call localhost:5000 
  // Might want to make localhost:5000 a global variable or stick it into redux
  // This will help you avoid problems when you deploy it 
  
  const dispatch = useDispatch(); // This Hook allows us to dispatch any redux action inside react components

  useEffect(() => {
    // console.log(products);
    // const fetchData = async () => { 
    //   const { data } = await axios.get('http://localhost:5000/api/products');
    //   setProduct(data);
    // }
    // fetchData(); --> Replaced by useSelector
    dispatch(listProducts());
    return () => {
      //
    };
  }, [dispatch])

    // Removed array from above because of below error
    //  Line 32:6:  React Hook useEffect has a missing dependency:
        // 'dispatch'
        // Either include them or remove the dependency array

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