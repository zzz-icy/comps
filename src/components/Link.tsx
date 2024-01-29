import NavigationContext from "../context/navigation.tsx"
import React, { useContext } from "react"
function Link({ to, children }) {
	const { navigateTo } = useContext(NavigationContext)
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault()
		if (navigateTo) {
			navigateTo(to)
		}
	}

	return <a onClick={handleClick}>{children}</a>
}
export default Link
