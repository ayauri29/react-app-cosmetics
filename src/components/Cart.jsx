import React, { useState, useEffect } from "react";
import ProductCard from "../components/Product-card";

const Cart = ({prod}) => {
	const [cart, setCart] = useState([])

	const cartArray = JSON.parse(localStorage.getItem("cart"));
	// setCart(cartArray)
	window.addEventListener('storage',e => console.log(e))
	// console.log(cartArray)

	return (
		<div>
			<p>{prod}</p>
			<button className="btn">Carrito</button>
		</div>
	);
};

export default Cart;
