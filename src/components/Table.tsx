import React from "react"
import "./Table.css"
import { Fruit } from "../pages/TablePage"
interface Props {
	config: {
		label: string
		render: (data: Fruit) => any
		sort?: (a: number, b: number) => void
	}[]
	data: Fruit[]
	keyFn: (data: any) => string
}

function Table({ config, data, keyFn }: Props) {
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
				{data.map((rowData, index) => {
					return (
						<tr key={keyFn(rowData)}>
							{config.map((cell, index) => {
								return <td key={cell.label}>{cell.render(rowData)}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Table
