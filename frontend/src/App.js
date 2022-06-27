import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./contents/Home";
import Warehouse from "./contents/Warehouse/Warehouse";
import Addnewproduct from "./contents/Addnewproduct/Addnewproduct";
import Editproduct from "./contents/Editproduct/Editproduct";
import Order from "./contents/Order/Order";

function App() {
	return (
		<div className="App">
			<Router>
			<Layout />
				<Routes>
					<Route exact path="home/" element={<Home/>}/>
					<Route exact path="warehouse/" element={<Warehouse/>}/>
					<Route exact path="warehouse/addnewproduct" element={<Addnewproduct/>}/>
					<Route exact path="warehouse/editproduct/:editvalueid" element={<Editproduct/>}/>
					<Route exact path="order/" element={<Order/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
