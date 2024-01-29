import Route from "./components/Route.tsx"
import "./index.css"
import React from "react"
import AccordionPage from "./pages/AccordionPage.tsx"
import DropdownPage from "./pages/DropdownPage.tsx"
import Link from "./components/Link.tsx"

function App() {
	return (
		<div style={{ display: "flex" }}>
			<div style={{ marginRight: 100 }}>
				<Link to='/accordion'>Go to Accordion Page</Link>
				<Link to='/dropdown'>Go to Dropdown Page</Link>
			</div>

			<div>
				<Route path={"/accordion"}>
					<AccordionPage />
				</Route>
				<Route path={"/dropdown"}>
					<DropdownPage />
				</Route>
			</div>
		</div>
	)
}
export default App
