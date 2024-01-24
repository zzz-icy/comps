import React, { useState } from "react"

interface Props {
	items: { id: string; label: string; content: string }[]
	expandedIndex: number
}
function Accordion({ items = [], expandedIndex }: Props) {
	const [expanded, setExpanded] = useState(false)
	console.log("items", items)
	const renderedItems = () => {
		return items.map((item, index) => {
			const isExpanded = index === expandedIndex
			return (
				<div
					key={item.id}
					// onClick={() => {
					// 	onClick(item.id)
					// }}
				>
					<div>{item.label}</div>
					{isExpanded && <div>{item.content}</div>}
				</div>
			)
		})
	}

	return <div>{renderedItems()}</div>
}
export default Accordion
