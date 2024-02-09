import React, { useState } from "react"
import Table, { TableProps } from "./Table.tsx"
import { TableConfig } from "../pages/TablePage.tsx"

type SortOrder = null | "asc" | "desc"

interface Props extends TableProps {}
function SortableTable(props: Props) {
	const { config, data } = props
	const [sortBy, setSortBy] = useState<TableConfig["label"] | null>(null)
	const [sortOrder, setSortOrder] = useState<SortOrder>(null)
	const handleClick = (label) => {
		if (sortOrder === null) {
			setSortOrder("asc")
			setSortBy(label)
		} else if (sortOrder === "asc") {
			setSortOrder("desc")
			setSortBy(label)
		} else if (sortOrder === "desc") {
			setSortOrder(null)
			setSortBy(null)
		}
	}

	let sortedData = [...data]
	if (sortBy && sortOrder) {
		const { sortValue } = config.find((column) => column.label === sortBy) || {}
		if (!!sortValue) {
			sortedData = [...data].sort((a, b) => {
				const valueA = sortValue(a)
				const valueB = sortValue(b)
				const reverseOrder = sortOrder === "asc" ? 1 : -1
				if (typeof valueA === "string") {
					return valueA.localeCompare(valueB) * reverseOrder
				} else {
					return (valueA - valueB) * reverseOrder
				}
			})
		}
	}

	const updatedConfig = config.map((column: TableConfig) => {
		if (!column.sortValue) {
			return column
		}
		return {
			...column,
			header: () => (
				<th onClick={() => handleClick(column.label)}>
					{column.label} IS SORTABLE
				</th>
			),
		}
	})

	return (
		<Table
			{...props}
			config={updatedConfig}
			data={sortedData}
		/>
	)
}
export default SortableTable
