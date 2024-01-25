import React, { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

import "./Dropdown.css"
import Panel from "./Panel.tsx"
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
					className='option'
					key={option.value}
					onClick={() => handleOptionClick(option)}
				>
					<div>{option.label}</div>
				</div>
			)
		})
	}
	return (
		<div className='container'>
			<Panel
				styleName='header'
				onClick={handleClick}
			>
				{selection?.label || "Select..."}
				{isOpen ? <GoChevronDown /> : <GoChevronLeft />}
			</Panel>
			{isOpen && <Panel styleName='sub-container'>{renderedOptions()}</Panel>}
		</div>
	)
}
export default Dropdown
