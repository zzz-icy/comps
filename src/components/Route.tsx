import React, { useContext } from "react"
import NavigationContext from "../context/Navigation.tsx"
function Route({ path, children }) {
	const { currentPath } = useContext(NavigationContext)

	if (path === currentPath) {
		return children
	}
	return null
}
export default Route
