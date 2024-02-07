import React from "react"
import Table, { TableProps } from "./Table.tsx"

interface Props extends TableProps {}
function SortableTable(props: Props) {
	return <Table {...props} />
}
export default SortableTable
