import Table from "../components/Table.tsx"
import React from "react"

function TablePage() {
	const fruits = [
		{ name: "Orange", color: "rgb(249 115 22)", score: 5 },
		{ name: "Apple", color: "rgb(252 165 165)", score: 5 },
		{ name: "Banana", color: "rgb(234 179 8)", score: 5 },
		{ name: "Lime", color: "rgb(34 197 94)", score: 5 },
	]

	return (
		<div>
			<Table data={fruits} />
		</div>
	)
}
export default TablePage
