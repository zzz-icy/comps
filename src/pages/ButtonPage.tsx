import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go"
import React from "react"

import "./index.css"
import Button from "../components/Button.tsx"
function ButtonPage() {
	return (
		<div style={{}}>
			<div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
				<Button
					variation='primary'
					shapeStyle='rounded'
					onClick={() => console.log("click!")}
				>
					<GoBell />
					GoBell Button
				</Button>
				<Button
					variation='secondary'
					onMouseEnter={() => {
						console.log("onMouseEnter")
					}}
				>
					Button
				</Button>
				<Button variation='success'>
					<GoDatabase />
					Button
				</Button>
				<Button variation='warning'>
					<GoCloudDownload />
					Button
				</Button>
				<Button
					variation='danger'
					shapeStyle='outline'
				>
					Button
				</Button>
			</div>
		</div>
	)
}
export default ButtonPage
