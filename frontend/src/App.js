import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'; 
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';
import CartScreen from './screens/cartScreen';
import { useSelector } from 'react-redux';

function App() {
    // Get access to cartItems from redux
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button className="" onClick={openMenu}>&#9776;</button>
                    <Link to="/">Mocha Styles</Link>
                </div>
                <div className="header-links">
                    <Link to="/cart">Shopping Cart
                    {cartItems.length > 0 && 
                        <span className="badge">{cartItems.length}</span>
                    }
                    </Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html">Gel</a>                    
                    </li>
                    <li>
                        <a href="index.html">Combs</a>
                    </li>
                </ul>            
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/" exact= {true} component={HomeScreen} />
                    <Route path="/category/:id" component={HomeScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route path="/cart/:id?" component={CartScreen} />
                </div>
            </main>
            <footer className="footer">
                All Rights Reserved.
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
