import React from "react";
import Nav from "./Nav";
import PigList from "./PigList"

function Header() {
	return (
		<h3>Header</h3>
	)
}

function App() {
	
	return (
		<div className="App">
			<Nav />
			<Header />
			<PigList />
		</div>
	);
}

export default App;
