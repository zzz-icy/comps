import React, { createContext, useState, useEffect } from "react"

const NavigationContext = createContext<NavigationContextType>({})
interface NavigationContextType {
	currentPath?: string
	navigateTo?: (to: string) => void
}
const NavigationProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState<string>(
		window.location.pathname
	)
	useEffect(() => {
		const handlePopState = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener("popstate", handlePopState)
		return () => window.removeEventListener("popstate", handlePopState)
	}, [])
	const navigateTo = (to: string) => {
		window.history.pushState({}, "", to)
		setCurrentPath(to)
	}
	return (
		<NavigationContext.Provider value={{ currentPath, navigateTo }}>
			{children}
		</NavigationContext.Provider>
	)
}
export { NavigationProvider }
export default NavigationContext
