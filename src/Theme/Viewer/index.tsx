import React from 'react'

import './viewer.scss'
import useStore from '../../useStore'
import NeonDialog from '../NeonDialog'

const defaultColors = [
	'primary',
	'secondary',
	'info',
	'success',
	'warning',
	'danger'
]

const customBackColors = [
	'back',
	'back-light',
	'back-button',
]

const customTextColors = [
	'text',
	'text-light',
	'text-dark',
	'text-link'
]

const Viewer = () => {
	const {theme, update} = useStore()
	const [status, setStatus] = React.useState({
		showDialog: false,
		text: ''
	})
	const onShow = () => {
		setStatus({...status, showDialog: true})
	}
	const onClose = () => {
		setStatus({...status, showDialog: false})
	}
	return (
		<div className={`theme-viewer ${theme}`}>
			<div className='d center middle gap'>
				<div className='h3 mt-1 mb-1 light-text'>Theme</div>
				<label className="theme-switch">
					<input type="checkbox" checked={!!theme ? false : true} onChange={()=>update({ theme: (!!theme ? '' : 'dark-theme') })}/>
					<span className="slider"></span>
				</label>
			</div>
			{/* theme color list */}
			<section className='card'>
				<div className='h4 mt-1 mb-1 light-text'>Color Palette</div>
				<div className='row'>
					{defaultColors.map(i=>(
						<div key={i} className="color-group col-lg-2 col-md-6">
							<div className='color-box'>
								<div style={{backgroundColor: `var(--${i})`}}>
									<div>{i}</div>
								</div>
							</div>
							<div className='color-box'>
								<div style={{backgroundColor: `var(--${i}-hover)`}}>
									<div>{i}</div>
								</div>
							</div>
							<div className='color-box'>
								<div style={{backgroundColor: `var(--${i}-active)`}}>
									<div>{i}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className='h4 mt-1 mb-1 light-text'>Background Color Palette</div>
						<div className='row'>
							{customBackColors.map(i=>(
								<div key={i} className="color-group col-md-4 col-sm-6 col-12">
									<div className='color-box'>
										<div style={{backgroundColor: `var(--${i})`}}>
											<div>{i}</div>
										</div>
									</div>
									<div className='color-box'>
										<div style={{backgroundColor: `var(--${i}-hover)`}}>
											<div>{i}</div>
										</div>
									</div>
									<div className='color-box'>
										<div style={{backgroundColor: `var(--${i}-active)`}}>
											<div>{i}</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-2">
						<div className='h4 mt-1 mb-1 light-text'>Border Palette</div>
						<div className="color-group d" style={{gap: 9}}>
							<div className='color-box shrink'><div style={{border: "1px solid var(--border)"}}>border</div></div>
							<div className='color-box shrink'><div style={{border: "1px solid var(--border-hover)"}}>hover</div></div>
							<div className='color-box shrink'><div style={{border: "1px solid var(--border-active)"}}>active</div></div>
						</div>
					</div>
					<div className="col-md-4">
						<div className='h4 mt-1 mb-1 light-text'>Forecolor Palette</div>
						<div className='row'>
							<div className="color-group col-6">
								<div className='color-box'><div style={{color: `var(--${customTextColors[0]})`}}>{customTextColors[0]}</div></div>
								<div className='color-box'><div style={{color: `var(--${customTextColors[1]})`}}>{customTextColors[1]}</div></div>
								<div className='color-box'><div style={{color: `var(--${customTextColors[2]})`}}>{customTextColors[2]}</div></div>
							</div>
							<div className="color-group col-6">
								<div className='color-box'><div style={{color: `var(--${customTextColors[3]})`}}>{customTextColors[3]}</div></div>
								<div className='color-box'><div style={{color: `var(--${customTextColors[3]}-hover)`}}>{customTextColors[3]}</div></div>
								<div className='color-box'><div style={{color: `var(--${customTextColors[3]}-active)`}}>{customTextColors[3]}</div></div>
							</div>
						</div>
					</div>
				</div>
				
				
			</section>
			{/* form elements */}
			<section className='row'>
				<div className='col-md-6 col-12'>
					<div className='card'>
						<div className='h4 mt-1 mb-1 light-text'>Form Elements</div>
						<div>
							<div>
								<label>
									<div className='mb'>Active</div>
									<input type="text" value={status.text} onChange={e=>setStatus({...status, text: e.target.value})} placeholder='Please input the text' />
								</label>
							</div>
							<div className='mt-1'>
								<label>
									<div className='mb'>Disabled</div>
									<input type="text" value={status.text} disabled placeholder='Please input the text' />
								</label>
							</div>
							<div className='mt-1'>
								<label>
									<div className='mb'>Select</div>
									<select name="select">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</label>
							</div>
							<div className='mt-1'>
								<label>
									<input type="checkbox" />
									Checkbox
								</label>
							</div>
							<div className='mt-1 d wrap middle gap'>
								<button className='fill'>Click me</button>
								<button className='outline'>Click me</button>
									<a className='button fill'>Link</a>
							</div>
							<div className='mt-1'>
								<button className='fill' onClick={onShow}>Click me to see Dialog</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-6 col-12'>
					<div className='card'>
						<div className='h4 mt-1 mb-1 light-text'>Typography</div>
						<div className='d column gap'>
							<div className='h1 light-text'>h1 heading</div>
							<div className='h2 light-text'>h2 heading</div>
							<div className='h3 light-text'>h3 heading</div>
							<div className='h4 light-text'>h4 heading</div>
							<div className='h5 light-text'>h5 heading</div>
							<div className='h6 light-text'>h6 heading</div>
						</div>
					</div>	
				</div>
			</section>
			{
				status.showDialog && (
					<NeonDialog onClose={onClose} title="This is dialog">
						<div>
							<div>
								<label>
									<input type="text" placeholder='Please input the text' />
								</label>
							</div>
							<div className='mt-1'>
								<label>
									<select name="select">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</label>
							</div>
							<div className='mt-2'>
								<button className='fill'>Save</button>
							</div>
						</div>
					</NeonDialog>
				)
			}
		</div>
	)
} 

export default Viewer