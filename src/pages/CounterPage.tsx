import React, { BaseSyntheticEvent, useReducer, useState } from "react"
import Button from "../components/Button.tsx"
import Panel from "../components/Panel.tsx"
import "./CounterPage.css"

const reducer = (state, action) => {
	if (action.type === "increment") {
		return {
			...state,
			count: state.count + 1,
		}
	}
}

function CounterPage({ initialCount = 0 }) {
	// const [count, setCount] = useState<number>(initialCount)
	// const [valueToAdd, setValueToAdd] = useState<number>(0)
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	})
	const handleIncrement = () => {
		// setCount(count + 1)
		dispatch({
			type: "increment",
		})
	}
	const handleDecrement = () => {
		// setCount(count - 1)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// setCount(count + valueToAdd)
		// setValueToAdd(0)
	}
	const handleChange = (e: BaseSyntheticEvent) => {
		// will return NaN if an empty string is passed to parseInt
		// setValueToAdd(parseInt(e.target.value, 10) || 0)
	}

	return (
		<Panel styleName='margin'>
			<h1>Count is {state.count}</h1>
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
					value={state.valueToAdd || ""} // so that the 0 is always displayed
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
