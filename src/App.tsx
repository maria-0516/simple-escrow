/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import useStore from './useStore';
// import mapping, { authMapping } from './RouterMapping'
import { IconViewer } from './Theme/Icon';
import Home from './Pages/Home';
import ThemeViewer from './Theme/Viewer';
import Layout from './Theme/Layout';
import NoPage from './Pages/404';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/anyway-theme" 	element={<ThemeViewer />} />
				<Route path="/anyway-icon" 		element={<IconViewer />} />
				<Route path="" element={<Layout />}>
					<Route path="/" 				element={<Home />} />
				</Route>
				<Route path="/*" 				element={<NoPage />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
