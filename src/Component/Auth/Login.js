import React from 'react';
import axios from 'axios'

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
        this.props.setToken(axiosResp.data.token,axiosResp.data.name,axiosResp.data.email)
        if(axiosResp.data.token){
            this.props.closeModal()
        }
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.submitLoginForm}> 
                    <input onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email address" />
                    <input type="password" onChange={this.changePass} value={this.state.password}  className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Log In</button>
                </form>
            </div>
        )
    }
}

export default Login