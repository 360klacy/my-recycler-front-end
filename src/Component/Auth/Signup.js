import React from 'react';
import axios from 'axios'
import {Redirect} from 'react-router'
import './../../App.css'

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fullName : "", username: "", email : "", password : ""
    };
  }

  changeEmail = (e)=>{this.setState({email: e.target.value})}
  changeName = (e)=>{this.setState({fullName: e.target.value})}
  changePass = (e)=>{this.setState({password: e.target.value})}
  changeUsername = (e) =>{this.setState({username: e.target.value})}

  submitSignupForm = async (e)=>{
    let tmpState = {...this.state}
    e.preventDefault();
    //   let formValid = true; 
    //   for(let key in this.state){
    //       if((this.))
    const url = `${window.apiHost}/signup`
    let axiosResp = await axios.post(url,tmpState)
    this.setState({
        fullName: '', 
        username: '',
        email: '', 
        password:''
    })
    this.props.setToken(axiosResp.data.token,axiosResp.data.name,axiosResp.data.email,axiosResp.data.id)
    
    
    if(axiosResp.data.token){
        this.props.closeModal()
    }

      }

 
  
  render(){
      console.log('this props authToken in Signup ',this.props)
    //   this.props.authToken ? <Redirect to="/userdashboard" /> : null
    return(<>


            <div className="modal">
              <div className="logo">
                <img className="logo-img" src="./012-van.png" alt="logo" />
              <p>MyRecycler</p>
              </div>
                  
              <div className="container">
                  <div className="details">
                      <h2>Sign up for an account.</h2>
                      <div className="spacer"></div>
                    <form onSubmit={this.submitSignupForm}>
                      <input className="input-bottom-border" required onChange={this.changeEmail} value={this.state.email} placeholder="Email Address" />
                      <input className="input-bottom-border" required onChange={this.changeName} value={this.state.name} placeholder='Full Name' />
                      <input className="input-bottom-border" required onChange={this.changeUsername} value={this.state.username} placeholder="Username" />
                      <input className="input-bottom-border" required type="password" onChange={this.changePass} value={this.state.password} placeholder="Password" />
                      <button className="action-btn">Sign up</button>
                      <div className="login-text align-left">Already have a Wasted account? <span className="link" onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                  </form>
                </div>
              </div>
          </div>

                
            {/* <div className="register-form">
                <form onSubmit={this.submitSignupForm}>
                    <input required onChange={this.changeEmail} value={this.state.email} className="email-signup" placeholder="Email Address" />
                    <input required onChange={this.changeName} value={this.state.name}  className="name-signup" placeholder='Full Name' />
                    <input required onChange={this.changeUsername} value={this.state.username}  className="username-signup" placeholder="Username" />
                    <input required type="password" onChange={this.changePass} value={this.state.password} className="password-signup" placeholder="Password" />
                    <button className="sign-up-button">Sign up</button>
                    <div className="border-rule"></div>
                    <div className="login-text align-left">Already have a Wasted account? <span onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                </form>
            </div>  */}
           </> )
  }
}
export default Signup;