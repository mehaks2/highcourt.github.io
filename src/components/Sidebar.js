import React , { Component}  from 'react';
const Sidebar=()=>{
	
	return(

		<>
		
			<nav className="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
				
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar1">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapsibleNavbar1">
			
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column h-100">		
						<li className="nav-brand">
							<a className="nav-link" href="#" >Transfers/Postings</a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Recruitments</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Judicial Officers</a></li>
							  <li><a className="dropdown-item" href="#">Administrative Staff</a></li>
							  <li><a className="dropdown-item" href="#">Society for Centralized Recruitment (S.S.S.C.)</a></li>
							</ul>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Rules & Orders</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">High Court Rules & Orders</a></li>
							  <li><a className="dropdown-item" href="#">High Court Establishment Rules, 1973 </a></li>
							  <li><a className="dropdown-item" href="#">Judicial Services Rules</a></li>
							  <li><a className="dropdown-item" href="#">Conduct Rules</a></li>
							  <li><a className="dropdown-item" href="#">ADR Rules</a></li>
							  <li><a className="dropdown-item" href="#">Gender Sensitisation Regulations, 2013</a></li>
							  <li><a className="dropdown-item" href="#">Guidlines for Registration of Legal Correspondents </a></li>
							  <li><a className="dropdown-item" href="#">Judicial Courts Premises and Compound Fund Rules, 2013.</a></li>
							</ul>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Central & State Acts</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Central Acts</a></li>
							  <li><a className="dropdown-item" href="#">Punjab State Acts</a></li>
							  <li><a className="dropdown-item" href="#">Haryana State Acts</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Court Fees-Filing Procedure</a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#">Lok Adalat</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Causelist</a></li>
							  <li><a className="dropdown-item" href="#">Rules</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Special Commercial </a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#">eGazette </a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Govt. of India</a></li>
							  <li><a className="dropdown-item" href="#">Punjab</a></li>
							  <li><a className="dropdown-item" href="#">Haryana</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Legal Aid</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Tenders Aid</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Roster</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Court Notices</a>
						</li>						
						<li className="nav-brand dropdown">
							<a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#">Publications </a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Annual Report</a></li>
							  <li><a className="dropdown-item" href="#">Announcements</a></li>
							  <li><a className="dropdown-item" href="#">Articles and Releases</a></li>
							  <li><a className="dropdown-item" href="#">Newsletters of the eCommittee</a></li>
							  <li><a className="dropdown-item" href="#"> List of  Sr. Advocates</a></li>
							  <li><a className="dropdown-item" href="#"> List of Nodal Officers</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Liquidation Notices</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Full/Larger Bench Judgments</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Download Forms/Performas/ Apps/Video </a>
						</li>	
						<li className="nav-brand dropdown">
							<a className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" href="#">Gender Sensitisation </a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Annual Report</a></li>
							  <li><a className="dropdown-item" href="#">Committee Members</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Steps to Reduce Pendency</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Right to Information</a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Archives </a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Recruitments Administrative Staff</a></li>
							  <li><a className="dropdown-item" href="#">Recruitments Judicial Officers</a></li>
							  <li><a className="dropdown-item" href="#">Results</a></li>
							  <li><a className="dropdown-item" href="#">Roster</a></li>
							  <li><a className="dropdown-item" href="#">Tender</a></li>
							  <li><a className="dropdown-item" href="#">Announcements</a></li>
							  <li><a className="dropdown-item" href="#">Centralized Recruitment</a></li>
							  <li><a className="dropdown-item" href="#">Transfer & Posting</a></li>
							  <li><a className="dropdown-item" href="#">Covid19 Notices</a></li>
							</ul>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Statistics</a>
							<ul className="dropdown-menu">
							  <li><a className="dropdown-item" href="#">Statistics/ Statements</a></li>
							  <li><a className="dropdown-item" href="#">Case Clearance Rate Data</a></li>
							  <li><a className="dropdown-item" href="#">Average Time taken for Disposal</a></li>
							</ul>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Advocates Information </a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">Roll of Advocates</a></li>
								<li><a className="dropdown-item" href="#">Senior Advocates Designation</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">VC Coordinating Officials List of Subordinate Courts</a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Vidhi Sahitya Prakashan---Azadi Ka Amrit Mahotsav </a>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Digital Courts Vision & Roadmap Phase III of the eCourts Project</a>
						</li>
						<li className="nav-brand dropdown">
							<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Decision of High Powered <br/>Committee</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item" href="#">PULSA</a></li>
								<li><a className="dropdown-item" href="#">HSLSA</a></li>
							</ul>
						</li>
						<li className="nav-brand">
							<a className="nav-link" href="#">Remote Point Coordinator</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Sidebar;