import React , { Component}  from 'react';
const Navbar=()=>{
	
	return(

		<>
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavbar">					
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
						<li className="nav-brand">
							<a className="nav-link" href="#" >Home</a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">About High Court</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">History</a></li>
							  <li><a className="dropdown-item" href="#">Building/Architecture</a></li>
							  <li><a className="dropdown-item" href="#">Court etiquette</a></li>
							  <li><a className="dropdown-item" href="#">Photo Gallery</a></li>
							  <li><a className="dropdown-item" href="#">Jurisdiction</a></li>
							  <li><a className="dropdown-item" href="#">Events</a></li>
							  <li><a className="dropdown-item" href="#">Calendar</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Honable Judges</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Administration</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Case Information</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">District Judiciary</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;