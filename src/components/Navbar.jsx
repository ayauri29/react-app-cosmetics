import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<Link className="navbar-brand" to="/">
			Navbar
		</Link>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/products">
						Productos
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/shopping-cart">
						Carrito
					</Link>
				</li>
				<li>
					<Cart />
				</li>
			</ul>
		</div>
	</nav>
);
