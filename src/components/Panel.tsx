import "./Panel.css"
import React, { useState } from "react"

interface PanelProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children?: React.ReactNode
	styleName?: string
	onClick?: () => void
}

function Panel({ children, styleName, onClick, ...rest }: PanelProps) {
	return (
		<div
			className={`panel ${styleName}`}
			onClick={onClick}
			{...rest}
		>
			{children}
		</div>
	)
}
export default Panel
