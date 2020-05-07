import React, { useState, useEffect } from "react";
import DataJson from "../data/data.json";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Detail from "../containers/Product"

const Products = (product) => {
	const [isModalOpen, toggleModal] = useState(false);

	const colors = product.product.product_colors;

	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	const cardStyles = {
		borderRadius: "4px",
		backgroundColor: "#fff",
		boxShadow:
			"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12)",
		display: "flex",
		flexDirection: "column",
		boxSizing: "border-box",
		width: "300px",
		margin: "2%",
		padding: "2%",
		alignItems: "center",
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			width: '50%'
		},
	};

	const title = {
		fontFamily: "Roboto, sans-serif",
		fontSize: "1rem",
		lineHeight: "2rem",
		fontWeight: "500",
		letterSpacing: ".0125em",
	};

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
		<div className="card" style={cardStyles}>
			<img
				src={product.product.api_featured_image}
				style={{ width: "100px", height: "100px" }}
			/>
			<h1 style={title}>{product.product.name}</h1>
			<p>{product.product.price === '0.0' ? '15.00' : product.product.price}</p>
			<button className="btn btn-primary" style={buttonStyle} onClick={openModal}> VER DETALLES</button>
			<Modal
				isOpen={modalIsOpen}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<Detail id={product.product.id}></Detail>
			</Modal>
		</div>
	);
};

export default Products;
