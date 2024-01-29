import Dropdown, { Option } from "../components/Dropdown.tsx"
import "./index.css"
import React, { useState } from "react"
function DropdownPage() {
	const options = [
		{ label: "Red", value: "red" },
		{ label: "Yellow", value: "yellow" },
		{ label: "Green", value: "green" },
	]

	const [selection, setSelection] = useState<Option | null>(null)
	const handleSelection = (newSelection: Option) => {
		setSelection(newSelection)
	}

	return (
		<div style={{ display: "flex" }}>
			<Dropdown
				options={options}
				selection={selection}
				onSelect={handleSelection}
			/>
			<Dropdown
				options={options}
				selection={selection}
				onSelect={handleSelection}
			/>
		</div>
	)
}
export default DropdownPage
