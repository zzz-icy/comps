import React, { BaseSyntheticEvent, useReducer, useState } from "react"
import Button from "../components/Button.tsx"
import Panel from "../components/Panel.tsx"
import "./CounterPage.css"

interface CounterState {
	count: number
	valueToAdd: number
}
enum COUNTERACTIONS {
	INCREMENT_COUNT = "increment",
	CHANGE_VALUE_TO_ADD = "change_value_to_add",
	DECREMENT_COUNT = "decrement",
	ADD_VALUE_TO_COUNT = "add_value_to_count",
}
const reducer = (
	state: CounterState,
	action: { type: COUNTERACTIONS; payload: number }
) => {
	switch (action.type) {
		case COUNTERACTIONS.INCREMENT_COUNT:
			return {
				...state,
				count: state.count + 1,
			}
		case COUNTERACTIONS.DECREMENT_COUNT:
			return {
				...state,
				count: state.count - 1,
			}
		case COUNTERACTIONS.ADD_VALUE_TO_COUNT:
			return {
				...state,
				count: state.count + state.valueToAdd,
				valueToAdd: 0,
			}
		case COUNTERACTIONS.CHANGE_VALUE_TO_ADD:
			return {
				...state,
				valueToAdd: action.payload,
			}
		default:
			throw new Error("unexpected action type: " + action.type)
		// ...
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
			type: COUNTERACTIONS.INCREMENT_COUNT,
			payload: 0,
		})
	}
	const handleDecrement = () => {
		// setCount(count - 1)
		dispatch({
			type: COUNTERACTIONS.DECREMENT_COUNT,
			payload: 0,
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		// setCount(count + valueToAdd)
		// setValueToAdd(0)
	}
	const handleChange = (e: BaseSyntheticEvent) => {
		// will return NaN if an empty string is passed to parseInt
		// setValueToAdd(parseInt(e.target.value, 10) || 0)
		const value = parseInt(e.target.value, 10) || 0
		dispatch({
			type: COUNTERACTIONS.CHANGE_VALUE_TO_ADD,
			payload: value,
		})
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
				<Button
					onClick={() => {
						dispatch({
							type: COUNTERACTIONS.ADD_VALUE_TO_COUNT,
							payload: 0,
						})
					}}
				>
					Add it!
				</Button>
			</form>
		</Panel>
	)
}

export default CounterPage
