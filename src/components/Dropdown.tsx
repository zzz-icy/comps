import React, { useState } from "react"
import "./Dropdown.css"
export interface Option {
	label: string
	value: string
}

interface Props {
	options: Option[]
	selection: Option | null
	onSelect: (newSelection: Option) => void
}

function Dropdown({ options, selection, onSelect }: Props) {
	const [isOpen, setIsOpen] = useState<boolean>()

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen)
	}

	const handleOptionClick = (value: Option) => {
		setIsOpen(false)
		onSelect(value)
	}

	const renderedOptions = () => {
		return options.map((option, index) => {
			return (
				<div
					className='header'
					key={option.value}
					onClick={() => handleOptionClick(option)}
				>
					<div>{option.label}</div>
				</div>
			)
		})
	}
	console.log("selection", selection)
	return (
		<div className='container'>
			<div
				className='subitem'
				onClick={handleClick}
			>
				{selection?.label || "Select..."}
			</div>
			{isOpen && <div>{renderedOptions()}</div>}
		</div>
	)
}
export default Dropdown
