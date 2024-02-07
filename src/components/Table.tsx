import React from "react"
import "./Table.css"
import { Fruit } from "../pages/TablePage"
interface Props {
	config: {
		label: string
		render: (data: Fruit) => any
		// sort?: (a: number, b: number) => void
	}[]
	data: Fruit[]
}

function Table({ config, data }: Props) {
	return (
		<table>
			<thead>
				<tr>
					{config.map((column, index) => {
						return <th key={column.label}>{column.label}</th>
					})}
				</tr>
			</thead>

			<tbody>
				{/* single cell or single column */}
				{data.map((fruit, index) => {
					return (
						<tr key={fruit.name}>
							{config.map((cell, index) => {
								return <td>{cell.render(fruit)}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Table
