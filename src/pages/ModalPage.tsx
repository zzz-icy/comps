import React, { useState } from "react"
import Modal from "../components/Modal.tsx"
import Button from "../components/Button.tsx"
function ModalPage() {
	const [showModal, setShowModal] = useState<boolean>(false)
	const handleClick = () => {
		setShowModal(true)
	}
	return (
		<div style={{ display: "flex" }}>
			<Button
				variation='primary'
				// shapeStyle='rounded'
				onClick={handleClick}
			>
				Open Modal
			</Button>
		</div>
	)
}
export default ModalPage
