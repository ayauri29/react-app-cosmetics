import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './components/Products'
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Product from "./containers/Product";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container p-4">
				<Switch>
					<Route path="/products" component={Products} />
					{/* <Route path="/product" component={Product} /> */}
					{/* <Route path="/" component={Users} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
