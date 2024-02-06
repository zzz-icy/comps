import React from "react"
import "./Table.css"
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
							<td>
								<div
									style={{
										backgroundColor: item.color,
										margin: 5,
										padding: 15,
									}}
								></div>
							</td>
							<td>{item.score}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default Table
