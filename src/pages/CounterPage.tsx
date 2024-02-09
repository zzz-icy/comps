import React, { BaseSyntheticEvent, SyntheticEvent, useState } from "react"
import Button from "../components/Button.tsx"
import Panel from "../components/Panel.tsx"
import "./CounterPage.css"
function CounterPage({ initialCount = 0 }) {
	const [count, setCount] = useState<number>(initialCount)
	const [valueToAdd, setValueToAdd] = useState<number>(0)

	const handleIncrement = () => {
		setCount(count + 1)
	}
	const handleDecrement = () => {
		setCount(count - 1)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setCount(count + valueToAdd)
		setValueToAdd(0)
	}
	const handleChange = (e: BaseSyntheticEvent) => {
		// will return NaN if an empty string is passed to parseInt
		setValueToAdd(parseInt(e.target.value, 10) || 0)
	}

	return (
		<Panel styleName='margin'>
			<h1>Count is {count}</h1>
			<div style={{ display: "flex", flexDirection: "row" }}>
				<Button
					onClick={handleIncrement}
					shapeStyle='outline'
				>
					Increment
				</Button>
				<Button
					onClick={handleDecrement}
					shapeStyle='outline'
				>
					decrement
				</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label>Add a lot!</label>
				<input
					value={valueToAdd || ""} // so that the 0 is always displayed
					onChange={handleChange}
					type='number'
					className='number-input'
				></input>
				<Button>Add it!</Button>
			</form>
		</Panel>
	)
}

export default CounterPage
