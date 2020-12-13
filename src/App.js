import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './context/ProductContext'
import CartContext from './context/CartContext'


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	
	//remove item from the cart
	const removeItem = itemId => {
		setCart(cart.filter(item => itemId !== item.id))
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
			
			<ProductContext.Provider value = {{ products, addItem }}>
			<CartContext.Provider value = {{ cart, removeItem }}>

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>

			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
