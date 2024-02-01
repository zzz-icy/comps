import "./Panel.css"
import React, { useState } from "react"
import "./Modal.css"
interface ModalProps {}

function Modal(props: ModalProps) {
	return (
		<div style={{ display: "relative" }}>
			<div className='background'> </div>
			<div className='modal'>I'm a modal!</div>
		</div>
	)
}
export default Modal
