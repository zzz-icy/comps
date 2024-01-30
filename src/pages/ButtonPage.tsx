import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go"
import React from "react"
import Button from "../components/Button.tsx"
function ButtonPage() {
	return (
		<div>
			<div>
				<Button
					variation='primary'
					shapeStyle='rounded'
					onClick={() => console.log("click!")}
				>
					<GoBell />
					GoBell Button
				</Button>
			</div>
			<div>
				<Button
					variation='secondary'
					shapeStyle='rounded'
					onMouseEnter={() => {
						console.log("onMouseEnter")
					}}
				>
					Secondary Button
				</Button>
			</div>
			<div>
				<Button variation='success'>
					<GoDatabase />
					Button
				</Button>
			</div>
			<div>
				<Button variation='warning'>
					<GoCloudDownload />
					Button
				</Button>
			</div>
			<div>
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
