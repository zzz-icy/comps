import Link from "./components/Link.tsx"
import "./index.css"
import React, { useEffect, useState } from "react"
function App() {
	return (
		<div style={{ display: "flex" }}>
			<Link to={"/aaa"}>Go to /aaa</Link>
		</div>
	)
}
export default App
