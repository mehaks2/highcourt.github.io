import React , { Component}  from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

function App() {
  return (
    <>
		<div className='container-fluid header'>
			<Header/>
			<Navbar/>
		</div>
		<div className='container-fluid header'>
			<div className='row'>
				<div className='col-md-2'>
				<Sidebar/>
				</div>
				<div className='col-md-10'>
					
				</div>
			</div>
		</div>
	</>
  );
}

export default App;
