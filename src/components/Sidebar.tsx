import React from "react"
import Link from "./Link.tsx"
import "./Sidebar.css"
function Sidebar() {
	const links = [
		{ label: "Dropdown", path: "/" },
		{ label: "Accordion", path: "/accordion" },
		{ label: "Button", path: "/button" },
		{ label: "Modal", path: "/modal" },
	]
	const renderedLinks = () =>
		links.map((link) => {
			return (
				<Link
					to={link.path}
					key={link.label}
					styleName='link'
				>
					{link.label}
				</Link>
			)
		})

	return <div className='sidebar'>{renderedLinks()}</div>
}
export default Sidebar
