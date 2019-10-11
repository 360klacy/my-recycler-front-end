import React from 'react';
import { Link } from 'react-router-dom'

function UserNav(props){
  return(<>
      <ul className="links">
            <li><Link to="/userdashboard">Dashboard</Link></li>
            <li><Link to="/">Settings</Link></li>
        </ul>
        <div className="btn-container">
            <button className="btn" onClick={props.logout}>Log out</button>
        </div>
  </>)
}
export default UserNav;