import React from "react"
import "./Link.css"
import useNavigation from "../hooks/use-navigation.ts"
interface Props {
	to: string
	children: React.ReactNode
	styleName?: string
}
function Link({ to, children, styleName }: Props) {
	const { navigateTo } = useNavigation()
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		console.log("e", e)
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
			className={`panel ${styleName}`}
		>
			{children}
		</a>
	)
}
export default Link
