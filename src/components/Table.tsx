import React, { Fragment, ReactNode } from "react"
import "./Table.css"
import { Fruit, TableConfig } from "../pages/TablePage"
export interface TableProps {
	config: TableConfig[]
	data: Fruit[]
	keyFn: (data: any) => string
}

function Table({ config, data, keyFn }: TableProps) {
	return (
		<table>
			<thead>
				<tr>
					{config.map((column) => {
						if (column.header) {
							return <Fragment key={column.label}>{column.header()}</Fragment>
						}
						return <th key={column.label}>{column.label}</th>
					})}
				</tr>
			</thead>

			<tbody>
				{/* single cell or single column */}
				{data.map((rowData) => {
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
