import SortableTable from "../components/SortableTable.tsx"
import React, { ReactNode } from "react"
const fruits = [
	{ name: "Orange", color: "rgb(249 115 22)", score: 5 },
	{ name: "Apple", color: "rgb(252 165 165)", score: 5 },
	{ name: "Banana", color: "rgb(234 179 8)", score: 5 },
	{ name: "Lime", color: "rgb(34 197 94)", score: 5 },
]
export interface Fruit {
	name: string
	color: string
	score: number
}

export interface TableConfig {
	label: string
	render: (data: Fruit) => any
	sortValue?: (a: Fruit) => any
	header?: () => ReactNode
}

function TablePage() {
	const config = [
		{
			label: "Name",
			render: (fruit: Fruit) => fruit.name,
			sortValue: (fruit) => fruit.name,
		},
		{
			label: "Color",
			render: (fruit: Fruit) => (
				<div
					style={{
						backgroundColor: fruit.color,
						margin: 5,
						padding: 15,
					}}
				></div>
			),
		},
		{
			label: "Score",
			render: (fruit: Fruit) => fruit.score,
			sort: (fruit) => fruit.score,
		},
	]
	const keyFn = (fruit: Fruit) => {
		return fruit.name
	}

	return (
		<div>
			<SortableTable
				config={config}
				data={fruits}
				keyFn={keyFn}
			/>
		</div>
	)
}
export default TablePage
