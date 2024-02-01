import React, { useState } from "react"
import Modal from "../components/Modal.tsx"
import Button from "../components/Button.tsx"
function ModalPage() {
	const [showModal, setShowModal] = useState<boolean>(false)
	const handleClick = () => {
		setShowModal(!showModal)
	}
	return (
		<div style={{ position: "relative" }}>
			<Button
				variation='primary'
				// shapeStyle='rounded'
				onClick={handleClick}
			>
				Open Modal
			</Button>
			{showModal && <Modal />}
		</div>
	)
}
export default ModalPage
