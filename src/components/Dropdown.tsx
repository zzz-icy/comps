import React, { useEffect, useRef, useState } from "react"
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
	const divRef = useRef<HTMLDivElement>(null)

	const handleClick = () => {
		setIsOpen((currentIsOpen) => !currentIsOpen)
	}

	useEffect(() => {
		const handler = (e) => {
			if (!divRef.current) {
				return
			}
			if (!divRef.current.contains(e.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("click", handler, true)

		return () => {
			document.removeEventListener("click", handler)
		}
	}, [])

	const handleOptionClick = (value: Option) => {
		setIsOpen(false)
		onSelect(value)
	}

	const renderedOptions = () => {
		return options.map((option, index) => {
			return (
				<div
					ref={divRef}
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
