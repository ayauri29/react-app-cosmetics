import React, { useState, useEffect } from "react";
import ProductCard from "../components/Product-card";
import SVGIcon from "../components/SVGIcon";

const Products = () => {
	const [product, setProduct] = useState([]);

	const types = [
		"blush",
		"bronzer",
		"eyebrow",
		"eyeliner",
		"eyeshadow",
		"foundation",
		"lip_liner",
		"lipstick",
		"mascara",
		"nail_polish",
	];

	const getProducts = async (type) => {
		const res = await fetch(
			`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`
		);
		const data = await res.json();
		setProduct(data);
		console.log(data);
	};

	return (
		<div>
			<div>
				{types.map((type, index) => (
					<button key={index} onClick={(e) => getProducts(type)}>
						{type}
					</button>
				))}
			</div>
			<div className="d-flex flex-wrap">
				{product.map((prod) => (
					<ProductCard product={prod}></ProductCard>
				))}
			</div>
		</div>
	);
};

export default Products;
