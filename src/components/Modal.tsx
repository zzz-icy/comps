import React, { useState } from "react"
import "./Modal.css"
import ReactDOM from "react-dom"

interface ModalProps {}

function Modal(props: ModalProps) {
	// return (
	// 	<div className='modal'>
	// 		<div className='background'> </div>
	// 		<div className='body'>I'm a modal!</div>
	// 	</div>
	// )
	// to fix if any parent component has a relative position
	return ReactDOM.createPortal(
		<div className='modal'>
			<div className='background'> </div>
			<div className='body'>I'm a modal!</div>
		</div>,
		document.querySelector(".modal-container")!
	)
}
export default Modal
