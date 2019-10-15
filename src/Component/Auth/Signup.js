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


              <div className="logo-container">
                <div className="logo">
                  <img className="logo-img" src="./012-van.png" alt="logo" />
                  <p className="light-color">R-Waste</p>
                </div>
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
                      <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                      <div className="login-text align-left light-color">Already have a R-Wasted account? <span className="link light-color" onClick={()=>{this.props.changeModalContent('login')}}>Log in</span></div>
                  </form>
                </div>
              </div>
           </> )
  }
}
export default Signup;