import React from "react"
interface Props {
	data: { name: string; color: string; score: number }[]
}
function Table({ data }: Props) {
	return (
		<table>
			<thead>
				<tr>
					<th>Fruit</th>
					<th>Color</th>
					<th>Score</th>
				</tr>
			</thead>

			<tbody>
				{/* single cell or single column */}
				{data.map((item, index) => {
					return (
						<tr key={item.name}>
							<td>{item.name}</td>
							<td>{item.color}</td>
							<td>{item.score}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Table
