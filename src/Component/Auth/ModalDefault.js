import React from 'react';
import { Link } from 'react-router-dom'
import './ModalDefault.css'
function ModalDefault(props){
  return(<>
    <div className="modal-content">
        <button onClick={()=>{props.changeModalContent('signup')}} className="center email-login">Sign up with email</button>
        <div className="border-rule"></div>
        <button onClick={()=>{props.changeModalContent('login')}} className="center email-login">LOG IN</button>
    </div>

  </>)
}
export default ModalDefault;