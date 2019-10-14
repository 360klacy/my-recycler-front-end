import React from 'react';
import axios from 'axios'
import './../../App.css'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    constructor(){
        super();
        this.state = {email:'', password:''}
    }
    changeEmail = (e)=>{this.setState({email: e.target.value})}
    changePass = (e)=>{this.setState({password: e.target.value})}

    submitLoginForm = async (e)=>{
        e.preventDefault();
        const formData = {...this.state}
        const url = `${window.apiHost}/users/login`
        const axiosResp = await axios.post(url, formData);
        
        console.log("LOGIN IN RESPONSE",axiosResp.data)
        this.props.setToken(
            axiosResp.data.token,
            axiosResp.data.name,
            axiosResp.data.email,
            axiosResp.data.id, 
            axiosResp.data.is_company
        )
        if(axiosResp.data.token){
            let sessionObj = JSON.stringify(axiosResp.data)
            window.sessionStorage.setItem("state",sessionObj)
        }
        if(axiosResp.data.token){
            this.props.closeModal()
        }

        

    }
    

    render(){

        return(<>

          
              <div className="logo">
                <img className="logo-img" src="./012-van.png" alt="logo" />
              <p>MyRecycler</p>
              </div>
                  
              <div className="container">
                  <div className="details">
                      <h2>Please log into your account.</h2>
                      <div className="spacer"></div>
                      <form onSubmit={this.submitLoginForm}> 
                        <input className="input-bottom-border" onChange={this.changeEmail} value={this.state.email} placeholder="Email address" />
                        <input className="input-bottom-border" type="password" onChange={this.changePass} value={this.state.password} placeholder="Password" />
                        <button className="action-btn">Log In</button>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <Link to="/">Forgot Password?</Link>
                    </form>
                </div>
              </div>
       
        </>)
    }
}

export default Login