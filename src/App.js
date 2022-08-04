import React , { Component}  from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';

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
	</>
  );
}

export default App;
