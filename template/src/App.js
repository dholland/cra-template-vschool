import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	return (
		<div className='container '>
			<div className='content'>
				<Header
					title='V School Assignment Title'
					appDescription='Make something really cool'
				/>
				<Main />
			</div>
			<Footer date='' />
		</div>
	);
}

export default App;
