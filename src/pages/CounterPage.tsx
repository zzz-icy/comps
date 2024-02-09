import React from "react"
import Button from "../components/Button.tsx"
import useCounter from "../hooks/use-counter.ts"
function CounterPage({ initialCount = 0 }) {
	const { count, handleClick } = useCounter(initialCount)
	return (
		<div>
			<h1>Count is {count}</h1>

			<Button onClick={handleClick}>Increment</Button>
		</div>
	)
}

export default CounterPage
