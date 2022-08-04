import React , { Component}  from 'react';
	const Header=()=>{
		
		return(
			<>
				<div className='row'>
					<div className='col-md-3 col-3'>
						<div className='logo'>
							<a href="" title="Home" rel="home" className="header__logo" id="logo">
								<img className="national_emblem" src="./GoI-logo.svg" alt="national emblem" />
								HIGH COURT OF <span>Punjab and Haryana</span>
							</a>
						</div>
					</div>
					<div className='col-md-6 col-6 text-center align-text-bottom middleText' >
						"It is better to risk saving a guilty person than to condemn an innocent one." - Voltaire Zadig
					</div>
					<div className="col-md-3 col-3">
						<ul className="nav float-right">					
							<li className="nav-item d-none d-sm-block d-lg-block">
								<a className="nav-link my-4 mx-0 mx-lg-1 " id="screenRead" href="#" data-toggle="modal" data-target="#screenReaderBoard">Screen Reader </a>
							</li>
							<li className="nav-item d-none d-sm-block d-lg-block">
								<a id="btn-decrease" className="btn btn-black btn-circle btn-sm  btn-sm my-4 mx-0 mx-lg-1" href="#">A-</a>
							</li>
							<li className="nav-item d-none d-sm-block d-lg-block">
								<a id="btn-orig" className="btn btn-black btn-circle btn-sm  btn-sm my-4 mx-0 mx-lg-1" href="#">A</a>
							</li>
							<li className="nav-item d-none d-sm-block d-lg-block">
								<a id="btn-increase" className="btn btn-black btn-circle btn-sm  btn-sm my-4 mx-0 mx-lg-1" href="#">A+</a>
							</li>
							<li className="nav-item  d-sm-block d-lg-block">
								<a id="btn-light" className="btn btn-light btn-outline-dark  btn-sm  btn-sm my-4 mx-0 mx-lg-1" href="#" onclick="change_contrast('light')">A</a>
							</li>
							<li className="nav-item  d-sm-block d-lg-block">
								<a id="btn-dark" className="btn btn-black  btn-sm  btn-sm my-4 mx-0 mx-lg-1" href="#" onclick="change_contrast('dark')">A</a>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
	export default Header;