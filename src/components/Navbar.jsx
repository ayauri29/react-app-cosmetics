import React from "react";
import {Nav, NavDropdown} from "react-bootstrap"
import { Link } from "react-router-dom";
import Cart from "./Cart";

export const Navbar = () => (
	<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);

	{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
	</nav> */}