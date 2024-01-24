import Dropdown from "./components/Dropdown.tsx"
import "./index.css"
import React, { useState } from "react"
function App() {
	const options = [
		{ label: "red", value: "red" },
		{ label: "yellow", value: "yellow" },
		{ label: "green", value: "green" },
	]

	return (
		<div style={{}}>
			<Dropdown options={options} />
		</div>
	)
}
export default App
