import React from "react"
import Table, { TableProps } from "./Table.tsx"
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"

import "./Table.css"
import useSort from "../hooks/use-sort.tsx"
import { TableConfig } from "../pages/TablePage.tsx"
export type SortOrder = null | "asc" | "desc"

interface Props extends TableProps {}
function SortableTable(props: Props) {
	const { config, data } = props
	const { sortedData, setSortColumn, sortBy, sortOrder } = useSort({
		config,
		data,
	})
	const updatedConfig = config.map((column: TableConfig) => {
		if (!column.sortValue) {
			return column
		}
		return {
			...column,
			header: () => (
				<th
					onClick={() => setSortColumn(column.label)}
					className='label-header'
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
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

const getIcons = (
	label: string,
	sortBy: TableConfig["label"] | null,
	sortOrder: SortOrder
) => {
	const bothIcons = (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<GoArrowSmallUp /> <GoArrowSmallDown />
		</div>
	)
	if (label !== sortBy) {
		return bothIcons
	}

	if (sortOrder === "asc") {
		return <GoArrowSmallUp />
	} else if (sortOrder === "desc") {
		return <GoArrowSmallDown />
	} else if (sortOrder === null) {
		return bothIcons
	}
}

export default SortableTable
