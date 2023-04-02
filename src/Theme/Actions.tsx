import React from 'react'
import { copyToClipboard } from '../useStore'
import Icon from './Icon'

const Actions = {
	Copy: ({text, title, round, big}: {text: string, title?: string, round?: boolean, big?: boolean})=>{
		const [active, setActive] = React.useState(false)

		const onCopy = () => {
			copyToClipboard(text)
			setActive(true)
			setTimeout(()=>setActive(false), 500)
		}

		return (active ? (
			<span className='menu-btn'>
				<Icon icon="FilledCheck" size = {20} />
				{/* <span className='ml'>Copied</span> */}
			</span>
		) : (
			<span className={`${!!round ? 'menu-btn' : 'menu-btn'}  cmd`} onClick={onCopy} title={title}>
				<Icon icon="Copy" size={20} />
			</span>
		))
	}
}

export default Actions