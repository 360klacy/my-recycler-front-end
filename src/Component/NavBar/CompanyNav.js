import React from 'react';
import { Link } from 'react-router-dom'

function CompanyNav(props){
  return(<>
        <ul className="links">
            <li><Link to="/company/dashboard">Dashboard</Link></li>
            <li><Link to="/">Settings</Link></li>
        </ul>
        <div className="btn-container">
            <button className="btn" onClick={props.logout}>Log out</button>
        </div>
  </>)
}
export default CompanyNav;