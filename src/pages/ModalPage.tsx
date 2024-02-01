import React, { useState } from "react"
import Modal from "../components/Modal.tsx"
import Button from "../components/Button.tsx"
function ModalPage() {
	const [showModal, setShowModal] = useState<boolean>(false)
	const handleClick = () => {
		setShowModal(true)
	}

	const handleClose = () => {
		setShowModal(false)
	}
	const handleAccept = () => {
		setShowModal(false)
	}

	const actionBar = (
		<div>
			<Button
				variation='primary'
				onClick={handleAccept}
			>
				I Accept
			</Button>
		</div>
	)
	const modal = (
		<Modal
			onClose={handleClose}
			actionBar={actionBar}
		>
			<p>Here is an important agreement for you to accept.</p>
		</Modal>
	)
	return (
		<div style={{ position: "relative" }}>
			<Button
				variation='primary'
				// shapeStyle='rounded'
				onClick={handleClick}
			>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc massa
				nulla, lobortis in diam vel, pellentesque dapibus ante. Integer posuere,
				metus ut luctus condimentum, risus orci interdum elit, efficitur commodo
				mi diam in lacus. Nam id ex faucibus, finibus dui at, feugiat metus.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras id convallis nulla, eu accumsan dui.
				Aenean a eleifend nibh. Nulla facilisi. Ut feugiat nibh vel purus
				bibendum feugiat. Phasellus ornare erat nec sapien hendrerit interdum.
				Vivamus aliquet metus tortor, vel hendrerit sem semper sit amet. Morbi
				sit amet lacus et enim faucibus vestibulum. Suspendisse rhoncus dolor
				libero, at auctor tellus porttitor id.Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa nulla, lobortis in diam vel,
				pellentesque dapibus ante. Integer posuere, metus ut luctus condimentum,
				risus orci interdum elit, efficitur commodo mi diam in lacus. Nam id ex
				faucibus, finibus dui at, feugiat metus. Pellentesque habitant morbi
				tristique senectus et netus et malesuada fames ac turpis egestas. Cras
				id convallis nulla, eu accumsan dui. Aenean a eleifend nibh. Nulla
				facilisi. Ut feugiat nibh vel purus bibendum feugiat. Phasellus ornare
				erat nec sapien hendrerit interdum. Vivamus aliquet metus tortor, vel
				hendrerit sem semper sit amet. Morbi sit amet lacus et enim faucibus
				vestibulum. Suspendisse rhoncus dolor libero, at auctor tellus porttitor
				id.
			</p>
		</div>
	)
}
export default ModalPage
