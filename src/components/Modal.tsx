import React, { useEffect } from "react"
import "./Modal.css"
import ReactDOM from "react-dom"

interface ModalProps {
	onClose: () => void
	actionBar: React.ReactNode
	children: React.ReactNode
}

function Modal({ onClose, actionBar, children }: ModalProps) {
	// return (
	// 	<div className='modal'>
	// 		<div className='background'> </div>
	// 		<div className='body'>I'm a modal!</div>
	// 	</div>
	// )
	// to fix if any parent component has a relative position
	const handleClose = () => {
		onClose()
	}
	useEffect(() => {
		document.body.style.overflow = "hidden"
		return () => {
			document.body.style.overflow = "visible"
		}
	}, [])

	return ReactDOM.createPortal(
		<div className='modal'>
			<div
				className='background'
				onClick={handleClose}
			>
				{" "}
			</div>
			<div className='body'>
				<div className='content'>
					{children}
					<div className='action'>{actionBar}</div>
				</div>
			</div>
		</div>,
		document.querySelector(".modal-container")!
	)
}
export default Modal
