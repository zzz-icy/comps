import Route from "./components/Route.tsx"
import "./index.css"
import React from "react"
import AccordionPage from "./pages/AccordionPage.tsx"
import DropdownPage from "./pages/DropdownPage.tsx"
import ButtonPage from "./pages/ButtonPage.tsx"
import Sidebar from "./components/Sidebar.tsx"

function App() {
	return (
		<div className='container'>
			<Sidebar />
			<div className='subcontainer'>
				<Route path={"/accordion"}>
					<AccordionPage />
				</Route>
				<Route path={"/"}>
					<DropdownPage />
				</Route>
				<Route path={"/button"}>
					<ButtonPage />
				</Route>
			</div>
		</div>
	)
}
export default App
