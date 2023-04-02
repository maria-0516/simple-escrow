/* eslint-disable react-hooks/exhaustive-deps */
import { Web3Button } from '@web3modal/react';
import React from 'react';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import './layout.scss'

const Layout = (props: any) => {
	return (
		<div className='dark-theme layout'>
			<div className='container' style={{maxWidth: '550px', margin: '0 auto'}}>
				<div className='header'>
					<Web3Button />
				</div>
				<div className='main'>
					<Outlet/>
				</div>
			</div>
		</div>
	)
}

export default Layout;