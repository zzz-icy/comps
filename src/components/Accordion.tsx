import React, { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import "./Accordion.css"
interface Props {
	items: { id: string; label: string; content: string }[]
	// expandedIndex: number
}
function Accordion({ items = [] }: Props) {
	const [expandedIndex, setExpandedIndex] = useState<number | undefined>(
		undefined
	)
	const handleClick = (index: number) => {
		if (expandedIndex === index) {
			setExpandedIndex(-1)
		} else {
			setExpandedIndex(index)
		}
	}
	const renderedItems = () => {
		return items.map((item, index) => {
			const isExpanded = index === expandedIndex
			const icon = (
				<span style={{ fontSize: "20px" }}>
					{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
				</span>
			)

			return (
				<div
					className='list'
					key={item.id}
				>
					<div
						className='item'
						onClick={() => handleClick(index)}
					>
						{item.label}
						{icon}
					</div>
					{isExpanded && <div className='content'>{item.content}</div>}
				</div>
			)
		})
	}

	return <div>{renderedItems()}</div>
}
export default Accordion
