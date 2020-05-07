import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";

const Product = ({ id }) => {
	// const idProduct = id.match.params.id;

	const [product, setProduct] = useState([]);
	const [colors, setColors] = useState([]);
	const [qty, setQty] = useState(1);
	const [cart, setCart] = useState([]);
	const [send, setSend] = useState(true);

	const getData = async () => {
		const res = await fetch(
			`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
		);
		const data = await res.json();
		setProduct(data);
		setColors(data.product_colors);
	};

	const addCart = () => {
		setSend(!send);
		setCart(product);
		console.log(send, cart)
		// if (localStorage.getItem("cart")) {
		// 	const tmpCart = JSON.parse(localStorage.getItem("cart"));
		// 	const index = tmpCart.findIndex((el) => el.id === product.id);
		// 	if (index !== -1) {
		// 		tmpCart[index].qty = parseInt(tmpCart[index].qty) + parseInt(qty);
		// 	} else {
		// 		tmpCart.push({ ...product, qty });
		// 	}
		// 	localStorage.setItem("cart", JSON.stringify(tmpCart));
		// } else {
		// 	console.log("estaba vacio");
		// 	localStorage.setItem("cart", JSON.stringify([{ ...product, qty }]));
		// }
	};

	const addQty = () => {
		setQty(qty + 1);
	};

	const subQty = () => {
		setQty(qty - 1);
	};
	useEffect(() => {
		getData();
	}, []);

	const buttonStyle = {
		fontFamily: "Roboto, sans-serif",
		fontSize: ".875rem",
		lineHeight: "2.25rem",
		fontWeight: "500",
		letterSpacing: ".0892857143em",
		textDecoration: "none",
		padding: "0 8px 0 8px",
		display: "inline-flex",
		border: "none",
		outline: "none",
		borderRadius: "4px",
	};

	return (
		<div>
			<div className="row">
				<div className="col">
					<img src={product.api_featured_image} height="300px" />
				</div>
				<div className="col">
					<h3 className="text-center">{product.name}</h3>
					<p>$ {product.price}</p>
					<div className="flex mr-2">
						{colors.map((color, index) => (
							<button
								key={index}
								className="btn btn-lg"
								style={{ backgroundColor: color.hex_value }}
							></button>
						))}
					</div>
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<button
								class="btn btn-outline-secondary"
								type="button"
								id="button-addon1"
								onClick={subQty}
							>
								-
							</button>
						</div>
						<input
							type="text"
							class="form-control"
							placeholder=""
							aria-label="Example text with button addon"
							aria-describedby="button-addon1"
							value={qty}
						/>
						<div class="input-group-append">
							<button
								class="btn btn-outline-secondary"
								type="button"
								id="button-addon2"
								onClick={addQty}
							>
								+
							</button>
						</div>
					</div>

					{/* <div>
						<button onClick={subQty}>-</button>
						<div>{qty}</div>
						<button onClick={addQty}>+</button>
					</div> */}
					{/* <input
						type="number"
						className="form-control"
						value={qty}
						onChange={(e) => setQty(e.target.value)}
					></input> */}
					<button style={buttonStyle} onClick={addCart}>
						Add to cart
					</button>
					<Cart prod={send === true ? cart : []} />
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: product.description }}></div>
		</div>
	);
};

export default Product;
