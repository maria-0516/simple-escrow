import React from 'react';
import { Link, useParams } from 'react-router-dom';

import "./home.scss";

const Home = () => {
	const [status, setStatus] = React.useState({
		step: 0,
		amount: 0,
		address: ''
	})

	const refAmount = React.useRef<HTMLInputElement>(null)

	const onSend = () => {
		if (!status.amount) {
			refAmount.current?.focus()
			return
		}
		setStatus({...status, step: 1})
	}

	const onConfirm = () => {

	}

	const onCancel = () => {

	}

	return (
		<div className='d column around middle'> 
			<div>
				<div className='h3 text-center'>Your Balance: 1000000 USDT</div>
				<div className='h3 text-center' style={{marginTop: '0.5em'}}>Escrow Balance: 1000000 USDT</div>
				{status.step===1 && (
					<div className='d center middle gap mt-3'>
						<button onClick={onConfirm}>Confirm</button>
						<button onClick={onCancel}>Cancel</button>
					</div>
				)}
			</div>
			<div style={{width: '100%'}}>
				<div style={{position: 'relative'}}>
					<div>
						<div style={{marginBottom: '0.5em'}}>Amount</div>
						<input type="number" ref={refAmount} value={status.amount} onChange={e=>setStatus({...status, amount: Number(e.target.value)})} />
					</div>
					<div style={{position: 'absolute',top: 38, right: 15}}>USDT</div>
				</div>
				<div className='mt-2'>
					<div style={{marginBottom: '0.5em'}}>Receiver Address</div>
					<input type="text" />
				</div>
				<div className='d center mt-4'>
					<button onClick={onSend}>Send</button>
				</div>
			</div>
		</div>
	)
};

export default Home;