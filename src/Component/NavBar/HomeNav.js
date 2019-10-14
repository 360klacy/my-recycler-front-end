import React from 'react';
import {Link} from 'react-router-dom'
function HomeNav(props){
  
  return(<>
      <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Our Story</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <div className="btn-container">
                    <button className="btn-border" onClick={props.signup}>Login</button>
                    <button className="btn" onClick={props.signup}>Create Account</button>
                </div>

  </>)
}
export default HomeNav;