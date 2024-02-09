import React from "react"
import "./Link.css"
import useNavigation from "../hooks/use-navigation.ts"
interface Props {
	to: string
	children: React.ReactNode
	styleName?: string
	activeStyle?: string
}
function Link({ to, children, styleName, activeStyle }: Props) {
	const { navigateTo, currentPath } = useNavigation()
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (e.metaKey || e.ctrlKey) {
			return
		}
		e.preventDefault()

		if (navigateTo) {
			navigateTo(to)
		}
	}

	return (
		<a
			href={to} // for the browser to handle, e.g. open in a new tab in Chrome
			onClick={handleClick}
			className={`${styleName} ${
				currentPath === to ? "active-path" : undefined
			}`}
		>
			{children}
		</a>
	)
}
export default Link
