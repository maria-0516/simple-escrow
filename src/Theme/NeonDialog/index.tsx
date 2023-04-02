import React from 'react'
import Icon from '../Icon'

import './neondialog.scss'

interface DialogProps {
	children?: any
	color?: string
	title: string
	onClose: Function
}

const NeonDialog = ({children, color, title, onClose}: DialogProps) => {
	return (
		<div className="modal neon-dialog">
			<div className="modal-overlay" onClick={() => onClose()}></div>
			<div className="modal-container">
				<div className='dialog-header light-text d center middle' style={{backgroundColor: `${!!color ? color: 'var(--body-light)'}`}}>
					<span className='bold-600'>{title}</span>
					<span onClick={() => onClose()}><Icon icon='Close' size={24} /></span>
				</div>
				<div className='body scroll'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default NeonDialog