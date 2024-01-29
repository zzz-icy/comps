import Accordion from "../components/Accordion.tsx"
import React, { useState } from "react"
function AccordionPage() {
	const items = [
		{
			id: "uieihsbb",
			label: "Can I use React on an project?",
			content: "You can use React on any project you want.",
		},
		{
			id: "uiesrihs",

			label: "Can I use Javascript on an project?",
			content: "You can use Javascript on any project you want.",
		},
		{
			id: "uieihs8eej",

			label: "Can I use CSS on an project?",
			content: "You can use CSS on any project you want.",
		},
	]

	return (
		<div style={{}}>
			<Accordion items={items} />
		</div>
	)
}
export default AccordionPage
